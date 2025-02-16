import { computed, type ExtractPropTypes } from 'vue'
import {
  type RouteLocationRaw,
  RouterLink,
} from 'vue-router'

export interface RouterLinkProps {
  tag?: string,
  to?: RouteLocationRaw | string,
  disabled?: boolean,
}

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