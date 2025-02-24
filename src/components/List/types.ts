import { RouterLinkProps } from '@/types/_internal/router'

export type ListType = 'column' | 'row'

export interface ListProps {
  items?: ListItemProps[],
  type?: ListType,
}

export interface ListItemProps extends RouterLinkProps {
  title: string,
  icon: string,
  active?: boolean,
}