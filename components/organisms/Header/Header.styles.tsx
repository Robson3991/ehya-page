import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 23px 0;

  ${up('md')} {
    margin: 36px 0;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;
