export const state = () => ({
  isMobile: false,
  isTablet: false,
  isDesktop: false
})

export const getters = {
  isMobile: state => state.isMobile,
  isTablet: state => state.isTablet,
  isDesktop: state => state.isDesktop
}

export const mutations = {
  setIsMobile (state, isMobile) {
    state.isMobile = isMobile
  },
  setIsTablet (state, isTablet) {
    state.isTablet = isTablet
  },
  setIsDesktop (state, isDesktop) {
    state.isDesktop = isDesktop
  }
}
