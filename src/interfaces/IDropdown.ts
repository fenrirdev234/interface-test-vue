export interface IDropdown {
  name?: string
  id?: string
}

export interface IDropdownProps {
  initialValue?: IDropdown
  data?: IDropdown[]
}

export interface IDropdownFilterProps {
  title?: string
  data?: IDropdown[]
}
