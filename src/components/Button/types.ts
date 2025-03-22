import { RouterLinkProps } from '@/types/_internal/router'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = 'primary' | 'black'

export interface ButtonProps extends RouterLinkProps {
  prependIcon?: string,
  appendIcon?: string,
  icon?: string,
  color?: ButtonColor,
  size?: ButtonSize,
  loading?: boolean,
}