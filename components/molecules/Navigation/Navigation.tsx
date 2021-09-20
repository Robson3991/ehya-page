import { useState } from 'react';
import data from './NavigationData';
import { LinkT } from 'types.d';
import {
  Container,
  NavContainer,
  SubNavContainer,
  NavigationItem,
  NavigationLink,
  SubNavItem,
  Hamburger,
  NavButton,
} from './Navigation.styles';
import AngleDown from 'components/atoms/icons/AngleDown';

const SubNavigation: React.FC<{ navChildren: LinkT[] }> = ({ navChildren }) => (
  <SubNavContainer>
    {navChildren.map(({ url, name }, index) => (
      <SubNavItem key={`subnav-item-${index}`}>
        <NavigationLink href={url}>{name}</NavigationLink>
      </SubNavItem>
    ))}
  </SubNavContainer>
);

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu((prevState) => !prevState);

  return (
    <>
      <Container isOpen={openMenu}>
        <NavContainer>
          {data.map(({ name, url, haveChildren, navChildren }, index) => (
            <NavigationItem key={`nav-item-${index}`}>
              <div>
                <NavigationLink href={url}>{name}</NavigationLink>
                {haveChildren && <AngleDown />}
              </div>
              {haveChildren && (
                <SubNavigation navChildren={navChildren as LinkT[]} />
              )}
            </NavigationItem>
          ))}
        </NavContainer>
        <NavButton text="Get it now" />
      </Container>
      <Hamburger isOpen={openMenu} onClick={handleClick} />
    </>
  );
};

export default Navigation;
