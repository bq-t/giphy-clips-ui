import { computed, type ExtractPropTypes } from 'vue'
import type { RouterLinkProps } from '@/types'
import { RouterLink } from 'vue-router'

export const useRouterLink = (props: ExtractPropTypes<RouterLinkProps>) => {
  const {
    tag = 'span',
    to,
    disabled = false
  } = props

  const computedTag = computed<string | typeof RouterLink>(() => {
    if (disabled) {
      return tag
    }

    if (to) {
      return RouterLink
    }
    return tag || 'div'
  })

  return {
    computedTag,
  }
}