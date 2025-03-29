import type { RouterLinkProps as VueRouterLinkProps } from 'vue-router'

export interface RouterLinkProps extends Partial<Omit<VueRouterLinkProps, 'to'>> {
  to?: VueRouterLinkProps['to'],
  tag?: string,
  href?: string,
  target?: string,
  append?: boolean,
  exact?: boolean,
  disabled?: boolean,
}