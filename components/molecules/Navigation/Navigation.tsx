import data from './NavigationData';
import { LinkT } from 'types.d';
import {
  Container,
  SubNavContainer,
  NavigationItem,
  NavigationLink,
  SubNavItem,
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

const Navigation = () => (
  <Container>
    {data.map(({ name, url, haveChildren, navChildren }, index) => (
      <NavigationItem key={`nav-item-${index}`}>
        <NavigationLink href={url}>{name}</NavigationLink>
        {haveChildren && <AngleDown />}
        {haveChildren && <SubNavigation navChildren={navChildren as LinkT[]} />}
      </NavigationItem>
    ))}
  </Container>
);

export default Navigation;
