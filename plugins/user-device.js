export default ({ app, store }, inject) => {
  app.mounted = () => {
    const MAX_MOBILE = 776
    const MAX_TABLET = 998
    store.commit('setIsMobile', window.screen.width <= MAX_MOBILE)
    store.commit('setIsTablet', window.screen.width > MAX_MOBILE && window.screen.width <= MAX_TABLET)
    store.commit('setIsDesktop', window.screen.width > MAX_TABLET)
  }
}
