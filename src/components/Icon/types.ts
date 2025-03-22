export type IconColor = 'black' | 'white' | 'primary'
export type IconSize = string | number

export interface IconProps {
  name: string,
  color?: IconColor,
  size?: IconSize,
  rounded?: boolean,
}