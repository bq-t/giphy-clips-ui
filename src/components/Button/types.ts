import { RouterLinkProps } from '@/types/_internal/router'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends RouterLinkProps {
  prependIcon?: string,
  appendIcon?: string,
  size?: ButtonSize,
}