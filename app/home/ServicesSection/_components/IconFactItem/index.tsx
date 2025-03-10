import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Flex, Text, TextProps, Title, TitleProps } from '@mantine/core';
import classes from './IconFactItem.module.css';

interface IconFactItemProps extends TextProps {
  children?: string;
  factTitle?: TitleProps['children'];
  icon: IconProp;
}

function IconFactItem(props: IconFactItemProps) {
  const { children, factTitle, icon, ...otherProps } = props;
  return (
    <Flex className={classes.container}>
      <Flex className={classes['icon-box']}>
        <FontAwesomeIcon className={classes.icon} icon={icon} />
      </Flex>
      <Box className={classes.copy}>
        <Title className={classes.title} order={5}>
          {factTitle}
        </Title>
        <Text className={classes.text} {...otherProps}>
          {children}
        </Text>
      </Box>
    </Flex>
  );
}

export default IconFactItem;
