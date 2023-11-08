export interface ISideIcon {
  active: boolean
  icon:
    | 'dashboard'
    | 'smart-enroller'
    | 'dropout-shield'
    | 'retention-partner'
    | 'risk-detector'
    | 'academy-offer'
    | 'more'
    | 'my-report'
    | 'custom-report'
    | 'workflows'
}

export interface ISideButton extends ISideIcon {
  name: string
  weigth: boolean
}

export interface ISideAccordion extends ISideButton, ISideIcon {
  items: string[]
}
