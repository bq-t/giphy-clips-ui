export type IconColor = 'black' | 'white' | 'primary'
export type IconSize = 'sm' | 'md' | 'lg' | number

export interface IconProps {
  name: string,
  color?: IconColor,
  size?: IconSize,
  rounded?: boolean,
}