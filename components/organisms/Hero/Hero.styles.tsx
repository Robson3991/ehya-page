import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';
import Container from 'components/atoms/Container';

export const StyledContainer = styled(Container)`
  padding: 0;
`;

export const Wrapper = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  ${up('xl')} {
    flex-direction: row;
    margin-top: 58px;
  }
`;

export const Content = styled.div`
  padding: 0 18px;

  ${up('md')} {
    padding: 0 64px;
  }

  ${up('xl')} {
    width: 50%;
  }

  ${down('md')} {
    margin-top: 42px;
  }
`;

export const HeroImage = styled.div`
  ${up('xl')} {
    width: 50%;
  }
`;

export const Paragraph = styled.p`
  margin: 24px 0 40px;
`;

export const Boxes = styled.div`
  display: flex;

  ${down('md')} {
    flex-direction: column;
  }
`;
