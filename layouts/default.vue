<template>
  <v-container class="container__full">
    <v-layout wrap class="default__layout">
      <v-flex xs12>
        <TopBar />
      </v-flex>
      <v-flex xs12>
        <nuxt />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TopBar from '~/components/TopBar'

export default {
  components: { TopBar }
}
</script>

<style lang="sass">

</style>
