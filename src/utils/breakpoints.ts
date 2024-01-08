const size = {
    mobile: '767px',
    tablet: '1380px',
    desktop: '1920px',
}

export const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktop: `@media only screen and (max-width: ${size.desktop})`,
}
