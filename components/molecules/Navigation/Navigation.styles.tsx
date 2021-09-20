import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
`;

export const SubNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 200px;
  max-width: 100vw;
  box-shadow: 0px 0px 21px 5px rgba(var(--color-black-rgb), 0.3);
  background: var(--color-white);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition);
`;

export const SubNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  font-weight: 1.4rem;
  font-weight: 300;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-black);
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 20px;

  svg {
    fill: var(--color-primary);
    margin-left: 4px;
    transition: fill var(--transition);
  }

  &:hover {
    ${SubNavContainer} {
      opacity: 1;
      pointer-events: all;
    }

    svg {
      fill: var(--color-primary-light);
    }
  }
`;

export const NavigationLink = styled.a`
  position: relative;
  color: var(--color-primary);
  font-size: 1.6rem;
  font-weight: 500;
  transition: color var(--transition);

  &:hover {
    color: var(--color-primary-light);
  }
`;
