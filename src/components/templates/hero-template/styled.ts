import styled from 'styled-components'
import { IBgColor, IImageSizes } from '.'
import { device } from '@/utils/breakpoints'
import Carousel from 'nuka-carousel'

export const StyledTemplateWrapper = styled.section<{ $position: 'relative' | undefined }>`
    position: ${(props) => props.$position};
    ${device.mobile} {
        overflow: hidden;
    }
`

export const StyledPresenterImage = styled.div<{ $imageSrc: IImageSizes; $flexAlign: 'flex-start' | 'flex-end' }>`
    background-image: url(${(props) => props.$imageSrc.lg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    width: 50%;
    top: 50px;
    height: calc(100% + 50px);

    ${(props) =>
        props.$flexAlign === 'flex-start' &&
        `
        top: 0;
        width: 100%;
        height: 100%;
        background-position: top right;
        right: 125px;
    `}

    ${device.tablet} {
        background-image: url(${(props) => props.$imageSrc.md});
        background-position: top left;

        ${(props) =>
            props.$flexAlign === 'flex-start' &&
            `
            width: 100%;
            background-position: top right;
            right: 0;
        `}
    }

    ${device.tablet} {
        background-image: url(${(props) => props.$imageSrc.md});
    }

    ${device.mobile} {
        background-image: url(${(props) => props.$imageSrc.sm});
        z-index: 1;
        width: 100%;
        background-position: top center;
        height: 281px;
        top: 0;
        position: relative;

        ${(props) =>
            props.$flexAlign === 'flex-start' &&
            `
            height: 251px;
        `}
    }
`

export const StyledProductSectionWrapper = styled.div<{ $bgColor?: IBgColor; $flexAlign: 'flex-start' | 'flex-end' }>`
    background-color: ${(props) => props.$bgColor?.md};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props) => props.$flexAlign};

    ${device.mobile} {
        background-color: ${(props) => props.$bgColor?.sm};
    }
`

export const StyledHeaderTextWrapper = styled.div`
    width: 50%;
    margin-top: 100px;
    margin-bottom: 10px;

    ${device.tablet} {
        width: 63%;
        margin-top: 50px;
    }

    ${device.mobile} {
        width: 100%;
        padding: 20px 0 15px;
        margin-top: 0;
        margin-bottom: 0;
    }
`

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: inherit;
    justify-content: inherit;
    padding: 0 30px;

    ${device.mobile} {
        padding: 0 20px;
    }
`

export const StyledCarousel = styled(Carousel)`
    .next-carousel {
        display: none;
    }
`
