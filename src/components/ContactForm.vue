<template>
  <b-container>
    <h2> Formulaire de Contact </h2>
    <b-form v-on:submit.prevent="submit">

      <b-form-group
          id="input-group-1"
          label="Adresse Email:"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Entrez votre Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Votre Nom:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Entrez votre nom"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Votre Message:" label-for="input-3">
        <b-form-textarea
            id="input-3"
            v-model="form.content"
            required
            placeholder="Entrez votre message"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="secondary">Envoyer</b-button>

    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        email: '',
        name: '',
        content: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.form);
      alert('Votre message a bien été envoyé\nNous y répondrons aussi vite que possible.')
      this.form.email = '';
      this.form.name = '';
      this.form.content = '';
    }
  }

}
</script>

<style scoped>

</style>