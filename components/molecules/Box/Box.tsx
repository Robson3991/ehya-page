import Button from 'components/atoms/Button';
import { Wrapper, Header, Text, CheckedIcon } from './Box.styles';

interface BoxProps {
  header: string;
  text: string;
  link: {
    url: string;
    text: string;
  };
  filled?: boolean;
}

const Box: React.FC<BoxProps> = ({ header, text, link, filled }) => (
  <Wrapper>
    <Button
      text={link.text}
      isFilled={filled}
      isBig
      withArrow
      as="a"
      href={link.url}
    />
    <CheckedIcon />
    <Header>{header}</Header>
    <Text>{text}</Text>
  </Wrapper>
);

export default Box;
