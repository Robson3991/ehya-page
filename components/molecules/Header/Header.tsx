import Image from 'next/image';
import Container from 'components/atoms/Container';
import { Wrapper } from './Header.styles';

const Header = () => (
  <Container>
    <Wrapper>
      <Image
        src="/images/logo.svg"
        alt="company logo"
        width="150"
        height="36"
      />
      <div></div>
    </Wrapper>
  </Container>
);

export default Header;
