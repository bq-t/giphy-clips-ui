import type { RouteLocationRaw } from 'vue-router'

export interface RouterLinkProps {
  tag?: string,
  href?: string,
  to?: RouteLocationRaw | string,
  target?: string,
  replace?: boolean,
  append?: boolean,
  activeClass?: string,
  exact?: boolean,
  exactActiveClass?: string,
  disabled?: boolean,
}