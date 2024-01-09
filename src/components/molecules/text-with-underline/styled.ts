import { device } from '@/utils/breakpoints'
import styled from 'styled-components'

export const StyledTextWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 6px;
    margin-bottom: 20px;

    ${device.mobile} {
        margin-bottom: 10px;
        column-gap: 10px;
    }
`

export const UnderlineStyle = styled.div<{ $underlineColor: string; $underlineTextColor: string }>`
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 1.5px;
    display: inline-block;
    color: ${(props) => props.$underlineTextColor};

    ${device.mobile} {
        font-size: 14px;
        line-height: 16.41px;
    }

    &::after {
        content: '';
        height: 5px;
        background: ${(props) => props.$underlineColor};
        display: block;
        border-radius: 4px;
        margin-top: 4px;

        ${device.mobile} {
            height: 4px;
            margin-top: 1px;
            background: #603ebe;
        }
    }
`
