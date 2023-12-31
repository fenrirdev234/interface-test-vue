export const StringIcon = (
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
    | 'age'
    | 'status'
    | 'country'
    | 'contact'
    | 'activity'
    | 'call'
    | 'email'
    | 'academy'
    | 'chat'
) =>
  icon === 'dashboard'
    ? 'home'
    : icon === 'smart-enroller'
    ? 'add_box'
    : icon === 'dropout-shield'
    ? 'outbound'
    : icon === 'retention-partner'
    ? 'loop'
    : icon === 'risk-detector'
    ? 'analytics'
    : icon === 'academy-offer'
    ? 'school'
    : icon === 'my-report'
    ? 'leaderboard'
    : icon === 'custom-report'
    ? 'addchart'
    : icon === 'workflows'
    ? 'account_tree'
    : icon === 'age'
    ? 'today'
    : icon === 'status'
    ? 'check_circle'
    : icon === 'country'
    ? 'location_on'
    : icon === 'contact'
    ? 'contact_page'
    : icon === 'activity'
    ? 'timeline'
    : icon === 'call'
    ? 'call'
    : icon === 'email'
    ? 'email'
    : icon === 'academy'
    ? 'school'
    : icon === 'chat'
    ? 'chat'
    : ''
