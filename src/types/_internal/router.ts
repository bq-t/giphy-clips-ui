import type { RouterLinkProps as VueRouterLinkProps } from 'vue-router'

export interface RouterLinkProps extends VueRouterLinkProps {
  tag?: string,
  href?: string,
  target?: string,
  append?: boolean,
  exact?: boolean,
  disabled?: boolean,
}