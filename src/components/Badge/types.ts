export type BadgeColor = 'primary' | 'black'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps {
  color?: BadgeColor,
  size?: BadgeSize,
}