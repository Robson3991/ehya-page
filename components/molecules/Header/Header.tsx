import Image from 'next/image';
import Container from 'components/atoms/Container';
import Button from 'components/atoms/Button';
import { Wrapper } from './Header.styles';
import Navigation from 'components/molecules/Navigation/Navigation';

const Header = () => (
  <Container>
    <Wrapper>
      <Image src="/images/logo.svg" alt="company logo" width="90" height="28" />
      <div>
        <Navigation />
        <Button text="Get it now" />
      </div>
    </Wrapper>
  </Container>
);

export default Header;
