export interface IEvent {
  type: 'activity' | 'contact' | 'country' | 'status' | 'age'
}

export interface IEventCard extends IEvent {
  title: string
  detail: string
  moreDetail: string
}
