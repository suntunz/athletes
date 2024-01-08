import React, { ReactNode } from 'react'
import { StyledTextWrapper, UnderlineStyle } from './styled'
import Text from '@/components/atoms/text'

interface ITextWithUnderline {
    underlineText: string
    underlineColor?: string
    underlineTextColor?: string
    children?: ReactNode
}

const TextWithUnderline = (props: ITextWithUnderline) => {
    const { underlineText, underlineColor = '#603ebe', underlineTextColor = '#000', children } = props

    return (
        <StyledTextWrapper>
            <UnderlineStyle $underlineColor={underlineColor} $underlineTextColor={underlineTextColor}>
                {underlineText}
            </UnderlineStyle>
            {children ? <Text>{children}</Text> : null}
        </StyledTextWrapper>
    )
}

export default TextWithUnderline
