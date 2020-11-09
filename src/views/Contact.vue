<template>
  <div>

    <ContactInfos/>
    <hr>
    <ContactForm/>

  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import ContactInfos from "@/components/ContactInfos";

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactInfos
  }
}
</script>

<style scoped>

</style>