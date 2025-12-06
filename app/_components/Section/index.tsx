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
} from '@mantine/core';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import classes from './Section.module.css';

interface SectionProps extends BoxProps {
  anchorId?: string;
  badgeText?: string;
  children?: React.ReactNode;
  image?: ImageProps & NextImageProps;
  sectionTitle?: TitleProps['children'];
  sectionTitleProps?: TitleProps;
  sectionVariant?: 'default' | 'denim' | 'image-background';
}

function Section(props: SectionProps) {
  const {
    anchorId,
    badgeText,
    children,
    image,
    sectionTitle,
    sectionTitleProps,
    sectionVariant = 'default',
    ...otherProps
  } = props;
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
            <Badge color="pc-denim" variant={sectionVariant === 'default' ? 'filled' : 'white'}>
              {badgeText}
            </Badge>
          )}
          <Title className={classes.title} order={2} {...sectionTitleProps}>
            {sectionTitle}
          </Title>
          {children}
          {sectionVariant !== 'image-background' && (
            <Divider
              className={classes.divider}
              color={sectionVariant === 'default' ? 'denim' : 'white'}
              size="sm"
            />
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default Section;
