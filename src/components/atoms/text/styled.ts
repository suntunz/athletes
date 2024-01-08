import styled from 'styled-components'
import { ITextProps } from '.'
import { device } from '@/utils/breakpoints'

export const StyledText = styled.div<Omit<ITextProps, 'children'>>`
    color: ${(props) => props.color?.lg || '#333'};
    font-size: ${(props) => props.size?.lg || '18px'};
    font-weight: ${(props) => props.fontWeight || '400'};
    line-height: ${(props) => props.$lineHeight?.lg};
    letter-spacing: ${(props) => props.$letterSpacing?.lg};

    ${device.tablet} {
        color: ${(props) => props.color?.md || '#333'};
        font-size: ${(props) => props.size?.md || '18px'};
        line-height: ${(props) => props.$lineHeight?.md};
        letter-spacing: ${(props) => props.$letterSpacing?.md};
    }

    ${device.mobile} {
        color: ${(props) => props.color?.sm || '#333'};
        font-size: ${(props) => props.size?.sm || '14px'};
        line-height: ${(props) => props.$lineHeight?.sm};
        letter-spacing: ${(props) => props.$letterSpacing?.sm};
    }
`
