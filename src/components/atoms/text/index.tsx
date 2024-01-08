import React, { ReactNode } from 'react'
import { StyledText } from './styled'

export type ResponsiveStyle = {
    sm: string
    md: string
    lg: string
}

export interface ITextProps {
    children: ReactNode
    color?: ResponsiveStyle
    size?: ResponsiveStyle
    $lineHeight?: ResponsiveStyle
    $letterSpacing?: ResponsiveStyle
    fontWeight?: '400'
}

const Text = (props: ITextProps) => {
    const { children, ...rest } = props

    return <StyledText {...rest}>{children}</StyledText>
}

export default Text
