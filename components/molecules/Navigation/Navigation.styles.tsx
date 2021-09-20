import styled, { css } from 'styled-components';
import { up, down } from 'styled-breakpoints';
import Button from 'components/atoms/Button';

interface IOpenMenu {
  isOpen?: boolean;
}

const closeMobileNav = css`
  ${down('md')} {
    opacity: 0;
    pointer-events: none;
  }
`;

const openMobileNav = css`
  ${down('md')} {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Container = styled.div<IOpenMenu>`
  display: flex;
  ${({ isOpen }) => (isOpen ? openMobileNav : closeMobileNav)}
`;

export const NavContainer = styled.ul`
  display: flex;

  ${down('md')} {
    display: block;
    position: fixed;
    inset: 0;
    flex-direction: column;
    background: var(--color-white);
    z-index: 1;
    text-align: center;
    padding-top: 70px;
    transition: opacity var(--transition);
  }
`;

export const SubNavContainer = styled.ul`
  display: flex;
  flex-direction: column;

  ${up('md')} {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: 200px;
    max-width: 100vw;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0px 0px 21px 5px rgba(var(--color-black-rgb), 0.3);
    background: var(--color-white);
    transition: opacity var(--transition);
  }
`;

export const SubNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1.4rem;
  font-weight: 300;
  padding: 15px 20px 0;

  ${down('md')} {
    a {
      color: var(--color-primary-light);
    }
  }

  ${up('md')} {
    padding: 15px 20px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-black);
    }
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 15px 20px;

  ${down('md')} {
    flex-direction: column;
  }

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

export const NavButton = styled(Button)`
  ${down('md')} {
    position: fixed;
    bottom: 20px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HamburgerContainer = styled.a<IOpenMenu>`
  display: none;

  ${down('md')} {
    position: relative;
    display: block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 2;

    & > span {
      background-color: var(--color-primary);
      border-radius: 1px;
      height: 2px;
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -1px 0 0 -15px;
      transition: height 100ms;
      &:after,
      &:before {
        content: '';
        background-color: var(--color-primary);
        border-radius: 1px;
        height: 2px;
        width: 100%;
        position: absolute;
        left: 50%;
        margin-left: -15px;
        transition: all 200ms;
      }
      &:after {
        top: -7px;
      }
      &:before {
        bottom: -7px;
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    `
      & > span {
          height: 0;
          &:after,
          &:before {
            top: 1px;
          }
          &:after {
            transform: rotate(45deg);
          }
          &:before {
            transform: rotate(-45deg);
          }
        }
  `}
`;

interface HamburgerProps extends IOpenMenu {
  onClick: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => (
  <HamburgerContainer isOpen={isOpen} onClick={onClick}>
    <span></span>
  </HamburgerContainer>
);
