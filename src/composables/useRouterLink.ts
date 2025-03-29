import { computed, getCurrentInstance, toRef, type ExtractPropTypes } from 'vue'
import { useLink } from 'vue-router'
import type { RouterLinkProps } from '@/types/_internal/router'

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

  const computedLinkProps = computed(() => ({
    ...props,
    to: toRef(() => to || ''),
  }))

  const { isActive: linkIsActive, isExactActive: linkIsExactActive } = useLink(computedLinkProps.value)
  const isActive = computed(() => {
    if (disabled || !to || vueRouter.value === undefined) {
      return false
    }
    return exact
      ? linkIsExactActive.value
      : linkIsActive.value
  })

  return {
    computedTag,
    computedLinkAttributes,
    isActive,
  }
}