import { computed, getCurrentInstance, type ExtractPropTypes } from 'vue'
import { RouterLinkProps } from '@/types/_internal/router'

export const useRouterLink = (props: ExtractPropTypes<RouterLinkProps>) => {
  const {
    tag = 'span',
    to,
    href,
    target,
    replace,
    append,
    activeClass,
    exact,
    exactActiveClass,
    disabled = false
  } = props

  const currentInstance = getCurrentInstance()
  const globalProperties = computed(() => currentInstance?.appContext?.config?.globalProperties)
  const vueRouter = computed(() => globalProperties?.value?.$router)

  const computedTag = computed(() => {
    if (!disabled && (href || to)) {
      if (!to || vueRouter.value === undefined) {
        return 'a'
      }
      return 'router-link'
    }
    return tag
  })

  const computedLinkAttributes = computed(() => computedTag.value === 'a' ? {
    target,
    href,
  } : {
    target,
    to,
    replace,
    append,
    activeClass,
    exact,
    exactActiveClass,
  })

  return {
    computedTag,
    computedLinkAttributes,
  }
}