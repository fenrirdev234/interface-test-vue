export interface IEvents {
  regID: string
  event: IEvent[]
}

export interface IEventType {
  type: 'activity' | 'contact' | 'country' | 'status' | 'age'
}

export interface IEvent {
  title: string
  type: 'activity' | 'contact' | 'country' | 'status' | 'age'
  detail: string
  moreDetail: string
}
