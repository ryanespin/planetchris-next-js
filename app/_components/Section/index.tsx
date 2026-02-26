import {
  Badge,
  Box,
  BoxProps,
  Container,
  Divider,
  Image,
  ImageProps,
  Title,
  TitleProps,
} from '@mantine/core'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

import classes from './Section.module.css'

interface SectionProps extends BoxProps {
  anchorId?: string
  badgeText?: string
  children?: React.ReactNode
  hideDivider?: boolean
  image?: ImageProps & NextImageProps
  sectionTitle?: TitleProps['children']
  sectionTitleProps?: TitleProps
  sectionVariant?: 'default' | 'denim' | 'denim-light' | 'image-background'
}

function Section(props: SectionProps) {
  const {
    anchorId,
    badgeText,
    children,
    hideDivider = false,
    image,
    sectionTitle,
    sectionTitleProps,
    sectionVariant = 'default',
    ...otherProps
  } = props

  return (
    <Box className={classes['bg-container']}>
      <div className={classes.anchor} id={anchorId} />
      {image && <Image className={classes.image} component={NextImage} {...image} />}
      <Box
        className={`
          ${classes.section}
          ${classes[`section-${sectionVariant}`]}
        `}
        component="section"
        {...otherProps}
      >
        <Container className={classes.container}>
          {badgeText && (
            <Badge color="pc-denim" variant={sectionVariant === 'denim' ? 'white' : 'filled'}>
              {badgeText}
            </Badge>
          )}
          <Title className={classes.title} order={2} {...sectionTitleProps}>
            {sectionTitle}
          </Title>
          {children}
          {!hideDivider && (
            <Divider
              className={classes.divider}
              color={sectionVariant === 'denim' ? 'white' : 'denim'}
              size="sm"
            />
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default Section
