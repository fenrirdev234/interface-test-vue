export interface IDropdown {
  name: string
  id: string
}

export interface IDropdownProps {
  initialValue: IDropdown
  data: Array<IDropdown>
}
