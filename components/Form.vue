
<template>
  <div class="container is-widescreen">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Qui</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Votre nom" v-model.lazy="form.nom" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
          <p
            class="help"
            :class="[checkNom && triedToSend ? 'is-danger' : '']"
          >Ce champs est obligatoire</p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Votre prénom" v-model="form.prenom" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
          <p
            class="help"
            :class="[checkPrenom && triedToSend ? 'is-danger' : '']"
          >Ce champs est obligatoire</p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">+33</a>
            </p>
            <p class="control is-expanded">
              <input
                class="input"
                type="tel"
                placeholder="Votre téléphone"
                v-model="form.telephone"
              />
            </p>
          </div>
          <p class="help" :class="[checkTelephone && triedToSend ? 'is-danger' : '']">Ce champs est obligatoire</p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Que produit ou service ?</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Sujet de la demande"
              v-model="form.type_demande"
            />
          </div>
          <p class="help" :class="[checkTypeDemande && triedToSend ? 'is-danger' : '']">Ce champs est obligatoire</p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Votre demande</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Décrivez au mieux votre demande"
              v-model="form.demande"
            ></textarea>
          </div>
          <p class="help" :class="[checkDemande && triedToSend ? 'is-danger' : '']">Ce champs est obligatoire</p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button v-on:click="sendForm" class="button is-primary">Envoyer la demande</button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SiteClient } from 'datocms-client'

export default {
  data() {
    return {
      triedToSend: false,
      form: {
        nom: '',
        prenom: '',
        telephone: '',
        type_demande: '',
        demande: '',
        itemType: '223630',
      },
      errors: {
        nom: 0,
        prenom: 0,
        telephone: 0,
        type_demande: 0,
        demande: 0
      }
    }
  },
  computed: {
    checkTelephone() {
      if (
        /^((\+)33|0)[1-9](\d{2}){4}$/.test(this.form.telephone)
      ) {
        return this.errors.telephone = false
      }
      return this.errors.telephone = true
    },
    checkNom() {
      return this.errors.nom = this.form.nom.length > 2 ? false : true
    },
    checkPrenom() {
      return this.errors.prenom = this.form.prenom.length > 2 ? false : true
    },
    checkTypeDemande() {
      return this.errors.type_demande = this.form.type_demande.length > 10 ? false : true
    },
    checkDemande() {
      return this.errors.demande = this.form.demande.length > 20 ? false : true
    }
  },
  methods: {
    checkForm() {
      if (
        /^((\+)33|0)[1-9](\d{2}){4}$/.test(this.form.telephone)
      ) {
        this.errors.telephone = true
      }
      this.errors.telephone = false

      this.errors.nom = this.form.nom.length > 2 ? false : true
      this.errors.prenom = this.form.prenom.length > 2 ? false : true
      this.errors.type_demande = this.form.type_demande.length > 10 ? false : true
      this.errors.demande = this.form.type_demande.length > 20 ? false : true
      
    },
    hasError() {
      let hasError = false
      for (let [key, value] of Object.entries(this.errors)) {
        if (value) {
          hasError = true
        }
      }

      return hasError
    },
    checkSimpleText(str) {
      if (str.length > 2 || str == '') {
        return false
      }
      return true
    },
    sendForm() {
      this.triedToSend = true

      if (!this.hasError()) {
        const client = new SiteClient(
          process.env.NUXT_ENV_DATOCMS_API_TOKEN_PUBLIC
        )

        client.items
          .create(this.form)
          .then(item => {
            console.log(item)
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  }
}
</script>