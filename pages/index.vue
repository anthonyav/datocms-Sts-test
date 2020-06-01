<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h2 class="title is-spaced">Les portes Picard Serrures</h2>
            <p
              class="subtitle"
            >Des portes personnalis&eacute;es, avec plusieurs centaines de couleurs et textures diff&eacute;rentes</p>
            <nuxt-link
              class="button is-primary"
              to="/posts/devis-gratuit"
            >N'h&eacute;sitez plus et demandez un devis gratuit!</nuxt-link>
          </div>
          <div class="column">
            <img
              src="https://www.datocms-assets.com/25602/1586518824-porte-blinde-slider-1-format-web.jpg"
              alt
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title">Installation de portes blind&eacute;es et serrures certifi&eacute;es</h2>
        <p>L&rsquo;&eacute;quipe de Stop Talon Serrurerie vous accueille dans ses magasins &agrave; Bourg-la-reine, afin d&rsquo;&eacute;tablir au mieux des solutions &agrave; vos besoins : cl&eacute; minute, pose de serrure, d&eacute;pannage et ouverture de porte, et enfin pose de porte blind&eacute;e de fabrication fran&ccedil;aise agr&eacute;&eacute;e par la marque Tordjman M&eacute;tal et Picard Serrures, font parti de l&rsquo;&eacute;ventail de services que nous proposons &agrave; nos clients.</p>
        <div class="columns">
          <div class="column is-4">
            <div class="level">
              <div class="level-item">
                <figure class="image is-128x128">
                  <img
                    class="is-rounded"
                    src="https://bulma.dev/placeholder/pictures/bg_circle.svg?primary=00d1b2"
                    alt
                  />
                </figure>
              </div>
            </div>
            <h5 class="title is-5">Urgence</h5>
            <p>Besoin d&rsquo;un d&eacute;pannage d&rsquo;urgence? Appelez nous au 01 46 61 82 88</p>
          </div>
          <div class="column is-4">
            <div class="level">
              <div class="level-item">
                <figure class="image is-128x128">
                  <img
                    class="is-rounded"
                    src="https://bulma.dev/placeholder/pictures/bg_circle.svg?primary=00d1b2"
                    alt
                  />
                </figure>
              </div>
            </div>
            <h5 class="title is-5">Devis gratuit</h5>
            <p>Vous souhaitez faire une demande de devis? C&rsquo;est tr&egrave;s simple cliquez <nuxt-link
              to="/posts/devis-gratuit"
            >ici.</nuxt-link></p>
          </div>
          <div class="column is-4">
            <div class="level">
              <div class="level-item">
                <figure class="image is-128x128">
                  <img
                    class="is-rounded"
                    src="https://bulma.dev/placeholder/pictures/bg_circle.svg?primary=00d1b2"
                    alt
                  />
                </figure>
              </div>
            </div>
            <h5 class="title is-5">Contact</h5>
            <p>Vous souhaitez plus d&rsquo;informations, n&rsquo;h&eacute;sitez pas &agrave; nous contacter au <br/><a href="tel:+331.46.61.82.88" itemprop="telephone">01 46 61 82 88</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container content has-text-centered">
        <div class="columns">
          <div class="column">
            <p>
              La société Stop Talon Serrurerie est spécialisée en
              <strong>cordonnerie</strong> et
              <strong>serrurerie</strong> et vous propose des solutions sur-mesure.
            </p>
            <p>
              Les cambriolages sont en perpétuelle augmentation : pour
              <strong>sécuriser son foyer</strong>, rien de tel qu’une&nbsp;porte blindée. pour la pose de celle ci il est indispensable de faire appel a un professionnel. Il saura vous conseiller sur le choix de la
              <strong>porte blindée</strong>, vous offrir des prestations de qualité, et intervenir si besoin pour le dépannage de serrure,
              <strong>ouverture de porte</strong>, ou encore le
              <strong>changement de barillets et cylindres</strong>.&nbsp;Toutes nos propositions de
              <strong>portes blindées</strong> sont sur mesure.&nbsp;Nos portes blindées&nbsp;bénéficient&nbsp;des certification A2P.
            </p>
            <p>
              Stop Talon Service se déplace à votre domicile, à Bourg-la-reine et ses alentours pour vous conseiller sur le choix et l’installation d’une
              <strong>porte ou serrure blindée,</strong> ou pour un dépannage en urgence suite à un cambriolage, une tentative d’effraction ou encore la perte de vos clé par exemple.
            </p>
          </div>
          <div class="column">
            <iframe src="https://player.vimeo.com/video/78903236?wmode=transparent" width="500" height="281" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { request, gql, imageFields, seoMetaTagsFields } from '~/lib/datocms'
import { toHead } from 'vue-datocms'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { mapMutations } from 'vuex'

export default {
  async asyncData({ params }) {
    const data = await request({
      query: gql`
        {
          site: _site {
            globalSeo {
              siteName
            }
            favicon: faviconMetaTags {
              ...seoMetaTagsFields
            }
          }

          posts: allPosts(first: 10, orderBy: _firstPublishedAt_DESC) {
            id
            title
            slug
            publicationDate: _firstPublishedAt
            excerpt
            coverImage {
              responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
                ...imageFields
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
      `
    })

    return { ready: !!data, ...data }
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP')
    }
  },
  head () {
    return {
      title: 'Accueil',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Votre cordonnerie et serrurerie' }
      ]
    }
  }
}
</script>
