import axios from 'axios'

export const state = () => ({
    menu: []
  })

export const mutations = {
    setMenu (state, menu ) {    
      state.menu = menu
    },
    setInfo (state, info ) {    
      state.info = info
    }
}

export const actions = {
    getMenu({ commit }) {
      return axios.post(
        'https://graphql.datocms.com/',
        {
          query: `
              query allMenus {

                allMenus(filter: {name: {eq: "header"}}) {
                    id
                    name
                    menuItem {
                      ... on MenuSingleRecord {
                        name
                        id
                        menuLink {
                          slug
                          title
                          _modelApiKey
                        }
                      }
                      ... on MenuMultiRecord {
                        id
                        name
                        submenuItem {
                          slug
                          title
                          _modelApiKey
                        }
                      }
                    }
                }
            }
  
          `
        },
        {
          headers: {
            Authorization:
            `Bearer ${process.env.NUXT_ENV_DATOCMS_API_TOKEN}`
          }
        }
      ).then((res) => {
        return commit('setMenu', res.data.data.allMenus[0].menuItem)
      })
        
    }
}
