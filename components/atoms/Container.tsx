import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';

const Container = styled.div`
  width: 100%;
  max-width: 1268px;
  padding: 0 18px;
  margin: 0 auto;

  ${up('md')} {
    padding: 0 64px;
  }
`;

export default Container;
