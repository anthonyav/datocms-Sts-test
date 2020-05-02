<template>
  <section class="hero is-fullwidth">
    <div class="hero-body content">
      <h1 class="title has-text-centered">{{ post.title }}</h1>
      <div class="section container is-widescreen" v-html="post.content" v-if="post.content.length"></div>
      <Form v-if="post.isWithForm" />
      <template v-for="modular in post.modular">
        <TabProduit
          v-bind:tab-product="modular"
          v-if="modular._modelApiKey == 'tab_produit'"
          :key="modular.id"
        />
        <BlockText
          v-bind:block-text="modular"
          v-if="modular._modelApiKey == 'block_text'"
          :key="modular.id"
        />
        <BlockMultiImage
          v-bind:block-multi-image="modular"
          v-if="modular._modelApiKey == 'block_multi_image'"
          :key="modular.id"
        />
      </template>
    </div>
  </section>
</template>

<script>
import {
  request,
  noAsyncrequest,
  gql,
  imageFields,
  seoMetaTagsFields
} from '~/lib/datocms'
import { toHead } from 'vue-datocms'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import Form from '@/components/Form'
import TabProduit from '@/components/TabProduit'
import BlockText from '@/components/BlockText'
import BlockMultiImage from '@/components/BlockMultiImage'

export default {
  components: {
    Form,
    TabProduit,
    BlockText,
    BlockMultiImage
  },
  asyncData({ params }) {
    return noAsyncrequest({
      query: gql`
        query BlogPostQuery($slug: String!) {
          site: _site {
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }

          post(filter: { slug: { eq: $slug } }) {
            seo: _seoMetaTags {
              ...seoMetaTagsFields
            }
            id
            title
            slug
            publicationDate: _firstPublishedAt
            content
            coverImage {
              responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
                ...imageFields
              }
            }
            isWithForm
            modular {
              ... on BlockMultiImageRecord {
                id
                _modelApiKey
                image {
                  responsiveImage(imgixParams: { fit: crop, w: 400 }) {
                    aspectRatio
                    base64
                    height
                    sizes
                    src
                    srcSet
                    webpSrcSet
                    width
                    alt
                    title
                  }
                }
              }
              ... on BlockTextRecord {
                id
                _modelApiKey
                text(markdown: true)
              }
              ... on TabProduitRecord {
                id
                _modelApiKey
                product {
                  id
                  title
                  content(markdown: true)
                  image {
                    responsiveImage(imgixParams: { fit: crop, w: 400 }) {
                      ...imageFields
                    }
                  }
                }
              }
            }
            author {
              name
              picture {
                responsiveImage(imgixParams: { fit: crop, ar: "1:1", w: 40 }) {
                  ...imageFields
                }
              }
            }
          }
        }

        ${imageFields}
        ${seoMetaTagsFields}
      `,
      variables: {
        slug: params.id
      }
    }).then(res => {
      return { ...res.data }
    })
    console.log('asyncData')
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  },
  head() {
    if (!this.ready) {
      return
    }

    return toHead(this.post.seo, this.site.favicon)
  }
}
</script>
