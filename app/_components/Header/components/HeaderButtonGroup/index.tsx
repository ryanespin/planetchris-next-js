import { Button, Flex, FlexProps } from "@mantine/core";

import classes from './HeaderButtonGroup.module.css';

interface HeaderButtonGroupProps extends FlexProps {
  close: () => void;
}

function HeaderButtonGroup(props: HeaderButtonGroupProps) {
  const { close, ...other } = props;
  return (
    <Flex className={classes.group} {...other}>
      <Button component="a" href="#ourCommitment" onClick={close} variant="subtle">
        Our Commitment
      </Button>
      <Button component="a" href="#services" onClick={close} variant="subtle">
        Services
      </Button>
      <Button component="a" href="#about" onClick={close} variant="subtle">
        About
      </Button>
      <Button component="a" href="#testimonials" onClick={close} variant="subtle">
        Testimonials
      </Button>
      {props.children}
    </Flex>
  );
}

export default HeaderButtonGroup;
