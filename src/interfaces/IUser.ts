export interface IState {
  state: 'available' | 'occupied' | 'inactive'
}
export interface IRol {
  rol: 'Admin' | 'Student'
}

export interface IUser extends IState, IRol {
  name: string
  image: string
  notification: string[]
}
