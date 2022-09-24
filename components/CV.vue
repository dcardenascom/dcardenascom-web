<template>
  <v-container class="container__full CV__container">
    <v-layout wrap class="CV__layout">
      <v-flex xs12 class="CV__card-block">
        <v-card>
          <v-layout wrap class="CV__card-layout">
            <v-flex
              v-for="(card, cardIndex) in cards"
              :key="`card_${cardIndex}`"
              :xs4="!state.isMobile"
              :xs12="state.isMobile"
              class="CV__card-element"
              :class="{ 'CV__card-element--border': !state.isMobile }"
            >
              <v-layout wrap>
                <v-flex xs12 class="CV__element-title">
                  {{ card.title }}
                </v-flex>
                <v-flex v-for="(point, pointIndex) in card.points" :key="`card_${pointIndex}`" xs12 class="CV__element-points">
                  <v-layout>
                    <v-flex shrink class="CV__element-dot">
                      ·
                    </v-flex>
                    <v-flex>
                      {{ point }}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex :xs4="!state.isMobile" :xs12="state.isMobile" class="CV__card-element">
              <v-layout wrap>
                <v-flex xs12 class="CV__element-title">
                  Contacto
                </v-flex>
                <v-flex v-for="(point, contactPointIndex) in contactPoints" :key="`card_${contactPointIndex}`" xs12 class="CV__element-points">
                  <v-layout wrap class="CV__contact-layout">
                    <v-flex shrink>
                      <a :href="point.link" target="_blank"><v-icon>{{ point.icon }}</v-icon> {{ point.label }}</a>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
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
          title: 'Dirección y gestión',
          points: [
            'Estrategia, implantación y seguimiento de objectivos',
            'Agile / Lean',
            'Gestión de riesgos y postmortems',
            'Gestión de equipos',
            'Data driven decision making',
            'Coordinación entre desarrollo, QA y producto',
            'Gestión y monitorización del proyecto',
            'Estrategias de producto: MVP-MVF-MMP-MMF',
            'Estrategias de despliegue'
          ]
        },
        {
          title: 'Equipos de desarrollo',
          points: [
            'TDD, BDD, DDD, Agile, Lean, SOLID',
            'Continuous integration/deployment/delivery',
            'Bases de datos relacional y no relacionales',
            'Protección DDOS, autoscaling y autobalancing',
            'Servicios, microservices y SOA',
            'GraphQL y Apollo',
            'Diseño de APIs propias',
            'Estrategia para la inserción de APIs',
            'Herramientas Agile / Lean: Jira, Trello, Asana, Redmine',
            'Git flows',
            'Automatización y deshumanización de procesos',
            'Estrategias de despliegue',
            'Logs y monitorización: Datadog, Sentry'
          ]
        }
      ],
      contactPoints: [
        { icon: 'mdi-email', label: 'david@dcardenas.com', link: 'mailto:&#100;&#097;&#118;&#105;&#100;&#064;&#100;&#099;&#097;&#114;&#100;&#101;&#110;&#097;&#115;&#046;&#099;&#111;&#109;' },
        { icon: 'mdi-twitter', label: '@dcardenas_com', link: 'https://twitter.com/dcardenas_com' },
        { icon: 'mdi-linkedin', label: 'davidcardenasguia', link: 'https://www.linkedin.com/in/davidcardenasguia/' }
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

.CV__container
  background: linear-gradient(rgba(245, 245, 245, 0.90), rgba(245, 245, 245, 0.90)), url('/lines.jpg')
  height: 100%
  background-position: center
  background-repeat: no-repeat
  background-size: cover

.CV__layout
  max-width: $max-width
  margin: 0 auto
  padding: 10px
  padding-bottom: 40px

.CV__card-block
  margin-top: 30px

.CV__card-block .v-card
  background-color: white

.CV__card-layout
  padding: 20px

.CV__card-element
  padding: 20px

.CV__card-element--border
  border-right: 1px solid $color__grey-2

.CV__element-title
  font-size: 1.4rem
  color: $color__blue
  margin-bottom: 20px

.CV__element-points
  font-size: 0.9rem
  color: $color__grey
  line-height: 1.7rem

.CV__contact-layout a
  color: $color__grey
  text-decoration: none

.CV__contact-layout .v-icon
  cursor: pointer
  font-size: 1.1rem
  color: $color__blue

.CV__contact-layout:hover a, .CV__contact-layout:hover .v-icon
  color: $color__blue

.CV__element-dot
  color: $color__blue
  padding-right: 5px
  font-weight: bold

</style>
