import React from 'react'
import Text, { ResponsiveStyle } from '@/components/atoms/text'
import TextWithUnderline from '@/components/molecules/text-with-underline'
import { StyledProductSection } from './styled'

export interface IProductSectionProps {
    order: string
    title: string
    description: string
    underlineColor?: string
    underlineTextColor?: string
    titleStyles: {
        $lineHeight: ResponsiveStyle
        $letterSpacing: ResponsiveStyle
        size: ResponsiveStyle
        color: ResponsiveStyle
    }
    descriptionStyles: {
        $lineHeight: ResponsiveStyle
        size: ResponsiveStyle
        color: ResponsiveStyle
    }
}

const ProductSection = (props: IProductSectionProps) => {
    const { order, title, description, underlineColor, underlineTextColor, titleStyles, descriptionStyles } = props

    return (
        <StyledProductSection>
            <TextWithUnderline underlineText={order} underlineColor={underlineColor} underlineTextColor={underlineTextColor}>
                <Text {...titleStyles}>{title}</Text>
            </TextWithUnderline>
            <Text {...descriptionStyles}>{description}</Text>
        </StyledProductSection>
    )
}

export default ProductSection
