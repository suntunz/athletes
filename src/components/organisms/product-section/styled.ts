import { device } from '@/utils/breakpoints'
import styled from 'styled-components'

export const StyledProductSection = styled.div`
    width: 50%;
    padding: 60px 0;

    ${device.tablet} {
        width: 63%;
        padding: 30px 0;
    }

    ${device.mobile} {
        width: 100%;
        padding-top: 60px;
        padding-bottom: 60px;
        margin-bottom: 10px;
    }
`
