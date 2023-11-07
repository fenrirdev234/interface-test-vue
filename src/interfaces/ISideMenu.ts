export interface ISideIcon {
  active: boolean
  icon:
    | 'dashboard'
    | 'smart-enroller'
    | 'dropout-shield'
    | 'risk-detector'
    | 'academy-offer'
    | 'my-report'
    | 'more'
    | 'custom-report'
    | 'workflows'
}

export interface ISideButton extends ISideIcon {
  name: string
}
