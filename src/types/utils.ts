import type { RouteLocationRaw } from 'vue-router'

export interface RouterLinkProps {
  tag?: string,
  to?: RouteLocationRaw | string,
  disabled?: boolean,
}