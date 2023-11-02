export interface ITimeline {
  autor?: string
  type?: 'email' | 'chat' | 'academy' | 'call' | 'tag'
  title?: string
  message?: string
  link?: string
  from?: string
  time?: {
    date?: string
    month?: string
    year?: string
  }
}

export interface ITimelineIcon {
  type?: 'email' | 'chat' | 'academy' | 'call' | 'tag'
}

export interface ITimelineCard {
  autor?: string

  title?: string
  message?: string
  link?: string
  from?: string
  date?: string
}
