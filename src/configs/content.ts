import { IHeroTemplateProps } from '@/components/templates/hero-template'

export const contentConfig: IHeroTemplateProps[] = [
    {
        headerTitle: 'ATHLETES',
        imgSrc: {
            lg: '/images/graphic.png',
            md: '/images/graphic-tablet.png',
            sm: '/images/graphic-mobile.png',
        },
        productSection: [
            {
                order: '01',
                title: 'CONNECTION',
                description: 'Connect with coaches directly, you can ping coaches to view profile.',
                bgColor: {
                    md: '#fff',
                    sm: '#F5F4F9',
                },
                titleStyles: {
                    $lineHeight: { sm: '32.81px', md: '42.19px', lg: '42.19px' },
                    $letterSpacing: { sm: '1.5px', md: '1.5px', lg: '1.5px' },
                    size: { sm: '28px', md: '36px', lg: '36px' },
                    color: { sm: '#C2C2C2', md: '#C2C2C2', lg: '#C2C2C2' },
                },
                descriptionStyles: {
                    $lineHeight: { sm: '17.58px', md: '28px', lg: '28px' },
                    size: { sm: '15px', md: '18px', lg: '20px' },
                    color: { sm: '#000', md: '#000', lg: '#000' },
                },
            },
            {
                order: '02',
                title: 'COLLABORATIONS',
                description:
                    'Work with other student athletes to increase visibility. When you share and like other players videos it will increase your visibility as a player. This is the team work aspect to Surface 1.',
                bgColor: {
                    md: '#F5F4F9',
                    sm: '#F5F4F9',
                },
                titleStyles: {
                    $lineHeight: { sm: '32.81px', md: '42.19px', lg: '42.19px' },
                    $letterSpacing: { sm: '1.5px', md: '1.5px', lg: '1.5px' },
                    size: { sm: '28px', md: '36px', lg: '36px' },
                    color: { sm: '#C2C2C2', md: '#C2C2C2', lg: '#C2C2C2' },
                },
                descriptionStyles: {
                    $lineHeight: { sm: '17.58px', md: '28px', lg: '28px' },
                    size: { sm: '15px', md: '18px', lg: '20px' },
                    color: { sm: '#000', md: '#000', lg: '#000' },
                },
            },
            {
                order: '03',
                title: 'GROWTH',
                description:
                    'Resources and tools for you to get better as a student Athlete. Access to training classes, tutor sessions, etc',
                bgColor: {
                    md: '#5E3DB3',
                    sm: '#F5F4F9',
                },
                underlineColor: '#fff',
                titleStyles: {
                    $lineHeight: { sm: '32.81px', md: '42.19px', lg: '42.19px' },
                    $letterSpacing: { sm: '1.5px', md: '1.5px', lg: '1.5px' },
                    size: { sm: '28px', md: '36px', lg: '36px' },
                    color: { sm: '#C2C2C2', md: '#C2C2C2', lg: '#C2C2C2' },
                },
                descriptionStyles: {
                    $lineHeight: { sm: '17.58px', md: '28px', lg: '28px' },
                    size: { sm: '15px', md: '18px', lg: '20px' },
                    color: { sm: '#000', md: '#fff', lg: '#fff' },
                },
            },
        ],
        flexAlign: 'flex-end',
    },
    {
        headerTitle: 'PLAYERS',
        imgSrc: {
            lg: '/images/graphic-2.png',
            md: '/images/graphic-tablet-2.png',
            sm: '/images/graphic-mobile-2.png',
        },
        productSection: [
            {
                order: '01',
                title: 'CONNECTION',
                description:
                    'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
                bgColor: {
                    md: '#fff',
                    sm: '#F5F4F9',
                },
                titleStyles: {
                    $lineHeight: { sm: '32.81px', md: '42.19px', lg: '42.19px' },
                    $letterSpacing: { sm: '1.5px', md: '1.5px', lg: '1.5px' },
                    size: { sm: '28px', md: '36px', lg: '36px' },
                    color: { sm: '#C2C2C2', md: '#C2C2C2', lg: '#C2C2C2' },
                },
                descriptionStyles: {
                    $lineHeight: { sm: '17.58px', md: '28px', lg: '28px' },
                    size: { sm: '15px', md: '18px', lg: '20px' },
                    color: { sm: '#000', md: '#000', lg: '#000' },
                },
            },
            {
                order: '02',
                title: 'COLLABORATIONS',
                description: 'Work with recruiter to increase your chances of finding talented athlete.',
                bgColor: {
                    md: '#F5F4F9',
                    sm: '#F5F4F9',
                },
                titleStyles: {
                    $lineHeight: { sm: '32.81px', md: '42.19px', lg: '42.19px' },
                    $letterSpacing: { sm: '1.5px', md: '1.5px', lg: '1.5px' },
                    size: { sm: '28px', md: '36px', lg: '36px' },
                    color: { sm: '#C2C2C2', md: '#C2C2C2', lg: '#C2C2C2' },
                },
                descriptionStyles: {
                    $lineHeight: { sm: '17.58px', md: '28px', lg: '28px' },
                    size: { sm: '15px', md: '18px', lg: '20px' },
                    color: { sm: '#000', md: '#000', lg: '#000' },
                },
            },
            {
                order: '03',
                title: 'GROWTH',
                description: 'Save your time, recruit proper athlete for your team.',
                bgColor: {
                    md: '#090C35',
                    sm: '#F5F4F9',
                },
                underlineColor: '#fff',
                underlineTextColor: '#8F6BE8',
                titleStyles: {
                    $lineHeight: { sm: '32.81px', md: '42.19px', lg: '42.19px' },
                    $letterSpacing: { sm: '1.5px', md: '1.5px', lg: '1.5px' },
                    size: { sm: '28px', md: '36px', lg: '36px' },
                    color: { sm: '#C2C2C2', md: '#C2C2C2', lg: '#C2C2C2' },
                },
                descriptionStyles: {
                    $lineHeight: { sm: '17.58px', md: '28px', lg: '28px' },
                    size: { sm: '15px', md: '18px', lg: '20px' },
                    color: { sm: '#000', md: '#fff', lg: '#fff' },
                },
            },
        ],
        flexAlign: 'flex-start',
        position: 'relative',
    },
]
