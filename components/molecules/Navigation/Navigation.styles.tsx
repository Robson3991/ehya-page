import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.a`
  font-size: 1.6rem;
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;
