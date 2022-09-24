<template>
  <v-container class="container__full">
    <v-layout wrap>
      <v-flex xs12>
        <Hero />
      </v-flex>
      <v-flex xs12>
        <CV />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Hero from '~/components/Hero'
import CV from '~/components/CV'

export default {
  components: { Hero, CV }
}
</script>

<style lang="sass">

</style>
