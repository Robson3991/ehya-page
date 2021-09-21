import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 23px 0;

  ${up('md')} {
    padding: 36px 0;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;
