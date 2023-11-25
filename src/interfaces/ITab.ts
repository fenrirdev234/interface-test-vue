export interface ITabBottomType {
  type: 'none' | 'call' | 'email'
}

export interface ITabProps {
  title: string
  hash: string
}
export interface ITab extends ITabBottomType {
  title: string
  hash: string
}
export interface ITabBottom extends ITabBottomType {
  title: string
}
