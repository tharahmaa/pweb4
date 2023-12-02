export { default as About } from '../..\\components\\About.vue'
export { default as Detail } from '../..\\components\\Detail.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Homepage } from '../..\\components\\Homepage.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Resep } from '../..\\components\\Resep.vue'
export { default as Team } from '../..\\components\\Team.vue'
export { default as TeamMember } from '../..\\components\\TeamMember.vue'
export { default as Why } from '../..\\components\\Why.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
