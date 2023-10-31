export default interface ITimeline {
  autor?: string
  type?: string
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
export default interface ITimelineCard {
  autor?: string
  type?: string
  title?: string
  message?: string
  link?: string
  from?: string
  date?: string
}
