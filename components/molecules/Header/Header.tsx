import Image from 'next/image';
import Container from 'components/atoms/Container';
import Button from 'components/atoms/Button';
import { Wrapper, HeaderNav } from './Header.styles';
import Navigation from 'components/molecules/Navigation/Navigation';

const Header = () => (
  <Container>
    <Wrapper>
      <Image src="/images/logo.svg" alt="company logo" width="90" height="28" />
      <HeaderNav>
        <Navigation />
        <Button text="Get it now" />
      </HeaderNav>
    </Wrapper>
  </Container>
);

export default Header;
