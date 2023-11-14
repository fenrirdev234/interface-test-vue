export interface ITimelineData {
  autor: string
  type: 'email' | 'chat' | 'academy' | 'call' | 'tag'
  title: string
  message: string
  link: string
  from: string
  time: {
    date: string
    month: string
    year: string
  }
}

interface IData {
  name: string
  id: string
}

interface IFilter {
  title: string
  data: IData[]
}
export interface ITimelineFilter {
  years: IFilter
  users: IFilter
}
export interface ITimelineIcon {
  type: 'email' | 'chat' | 'academy' | 'call' | 'tag'
}

export interface IFetchTimeline {
  data?: ITimelineData[]
  filter?: ITimelineFilter
}

export interface ITimelineCard {
  autor?: string
  title?: string
  message?: string
  link?: string
  from?: string
  date?: string
}
