<template>
  <v-container class="container__full Hero__container">
    <v-layout class="layout__block Hero__layout" wrap>
      <v-flex v-if="state.isDesktop" xs3>
        <img src="~/assets/img/terminal.png">
      </v-flex>
      <v-flex v-if="!state.isMobile" :xs9="state.isDesktop" :xs12="state.isTalbet" class="Hero__subtitle">
        Máxima calidad en el diseño de arquitecturas y en la implementación de soluciones estables, bajo control, a prueba de alto tráfico de usuarios y con el dinamismo suficiente como para seguir adaptándose cada día.
      </v-flex>
      <v-flex v-if="state.isMobile" xs12 class="Hero__subtitle">
        Arquitectura de aplicaciones, servicios y todo tipo de software a medida para cualquier sector.
      </v-flex>
      <v-flex v-for="(card, index) in cards" :key="index" :xs4="!state.isMobile" xs12="state.isMobile" class="Hero__card-block">
        <v-card outlined flat hover>
          <v-layout wrap>
            <v-flex xs12 class="Hero__card-icon">
              <v-icon>{{ card.icon }}</v-icon>
            </v-flex>
            <v-flex xs12 class="Hero__card-title">
              {{ card.title }}
            </v-flex>
            <v-flex xs12 class="Hero__card-separator" />
            <v-flex xs12 class="Hero__card-body">
              {{ card.body }}
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        {
          icon: 'mdi-bank',
          title: 'Arquitecturas',
          body: 'SOA, Microservices, Cloud Native, API-First'
        },
        {
          icon: 'mdi-tools',
          title: 'Tecnologías',
          body: 'Python, PHP, Javascript, Node, Vue, React, Angular, Nuxt, GraphQL, Apollo, Flask, Ansible, Symfony, Laravel, Silex, Lumen, Django, AWS, Nginx, Apache, Docker'
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'Estrategias y metodologías',
          body: 'TDD, BDD, DDD, SOLID, CI/CD, BEM'
        }
      ]
    }
  },
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<style lang="sass">

.Hero__container
  background-color: transparent
  color: white

.Hero__layout
  padding-top: 30px
  padding-bottom: 30px
  @include for-phone
    padding-top: 0px

.Hero__title
  text-align: center
  font-size: 3rem

.Hero__subtitle
  text-align: center
  font-size: 1.4rem
  margin-top: 30px
  margin-bottom: 60px
  padding-top: 10px
  line-height: 2rem
  border-top: 1px solid white
  @include for-phone
    border-top: none
    padding-top: 0px
    margin-top: 5px
    margin-bottom: 5px
  @include for-tablet
    border-top: none
    padding-top: 0px
    margin-top: 20px
    margin-bottom: 20px

.Hero__card-block
  padding: 10px

.Hero__container .v-card
  background-color: transparent !important
  color: white !important
  text-align: center
  border-color: white !important
  padding: 10px
  transition: 0.3s
  @include for-phone
    min-height: auto
  @include for-tablet
    min-height: 284px
  @include for-desktop
    min-height: 230px

.Hero__container .v-card:hover
  background-color: white !important
  color: $color__blue !important

.Hero__card-icon .v-icon
  color: white !important
  font-size: 3rem !important
  margin-top: 10px
  transition: 0.3s

.Hero__container .v-card:hover .Hero__card-icon .v-icon
  color: $color__blue !important

.Hero__card-title
  font-size: 1.5rem
  margin-top: 10px

.Hero__card-separator
  border-bottom: 1px solid $color__grey-2
  @include for-phone
    margin-left: 20%
    margin-right: 20%
    margin-top: 10px
    margin-bottom: 10px
  @include for-tablet
    margin-left: 20%
    margin-right: 20%
    margin-top: 20px
    margin-bottom: 20px
  @include for-desktop
    margin-left: 20%
    margin-right: 20%
    margin-top: 20px
    margin-bottom: 20px

.Hero__card-body
  font-size: 0.9rem

</style>
