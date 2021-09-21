import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { up, down } from 'styled-breakpoints';

export const StyledContainer = styled(Container)`
  margin: 46px auto 70px;

  ${up('md')} {
    margin: 106px auto 120px;
  }
`;

export const Header = styled.h3`
  text-align: center;
`;

export const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 44px;
  padding: 0 15px;

  ${up('md')} {
    display: flex;
    justify-content: space-between;
    margin-top: 55px;
    padding: 0 40px;
  }
`;

export const Logo = styled.div`
  ${down('md')} {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    & > img {
      max-width: 72px;
    }
  }
`;
