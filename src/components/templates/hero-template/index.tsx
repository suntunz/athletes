import React, { useEffect, useMemo, useState } from 'react'
import Text from '@/components/atoms/text'
import ProductSection, { IProductSectionProps } from '@/components/organisms/product-section'
import {
    Container,
    StyledCarousel,
    StyledHeaderTextWrapper,
    StyledPresenterImage,
    StyledProductSectionWrapper,
    StyledTemplateWrapper,
} from './styled'
import { useMediaQuery } from '@/utils/useMediaQuery'

export interface IImageSizes {
    sm: string
    md: string
    lg: string
}

export interface IBgColor {
    sm: string
    md: string
}

export type ContentType = IProductSectionProps & {
    bgColor: IBgColor
    underlineColor?: string
    underlineTextColor?: string
}

export interface IHeroTemplateProps {
    headerTitle: string
    productSection: ContentType[]
    imgSrc: IImageSizes
    flexAlign: 'flex-start' | 'flex-end'
    position?: 'relative' | undefined
}

const HeroTemplate = (props: IHeroTemplateProps) => {
    const { headerTitle, productSection, imgSrc, flexAlign, position = 'relative' } = props
    const [isClient, setIsClient] = useState(false)
    const isMobileMediaQuery = useMediaQuery('(max-width: 767px)')

    useEffect(() => {
        setIsClient(true)
    }, [])

    const headerTextStyles = useMemo(() => {
        return {
            size: { sm: '50px', md: '90px', lg: '90px' },
            color: { sm: '#e7e7e7', md: '#e7e7e7', lg: '#e7e7e7' },
            $lineHeight: { sm: '58.59px', md: '105.47px', lg: '105.47px' },
        }
    }, [])

    const renderContent = () => {
        return productSection.map((item, key) => (
            <StyledProductSectionWrapper key={key} $bgColor={item.bgColor} $flexAlign={flexAlign}>
                <Container>
                    <ProductSection
                        key={key}
                        description={item.description}
                        order={item.order}
                        title={item.title}
                        titleStyles={item.titleStyles}
                        descriptionStyles={item.descriptionStyles}
                        underlineColor={item?.underlineColor}
                        underlineTextColor={item.underlineTextColor}
                    />
                </Container>
            </StyledProductSectionWrapper>
        ))
    }

    return (
        <StyledTemplateWrapper $position={position}>
            {/* Head Title */}
            <StyledProductSectionWrapper $flexAlign={flexAlign}>
                <Container>
                    <StyledHeaderTextWrapper>
                        <Text {...headerTextStyles}>{headerTitle}</Text>
                    </StyledHeaderTextWrapper>
                </Container>
            </StyledProductSectionWrapper>

            {/* Presenter image */}
            <StyledPresenterImage $imageSrc={imgSrc} $flexAlign={flexAlign} />

            {/* Content Detail */}
            {isClient && isMobileMediaQuery ? (
                <StyledCarousel
                    defaultControlsConfig={{
                        nextButtonClassName: 'next-carousel',
                        prevButtonClassName: 'prev-carousel',
                        pagingDotsClassName: 'paging-dots-carousel',
                        pagingDotsContainerClassName: 'paging-dots-container-carousel',
                    }}
                >
                    {renderContent()}
                </StyledCarousel>
            ) : (
                renderContent()
            )}
        </StyledTemplateWrapper>
    )
}

export default HeroTemplate
