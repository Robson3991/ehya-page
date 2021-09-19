import data from './NavigationData';
import { LinkT } from 'types.d';
import { Container, NavigationItem } from './Navigation.styles';

const SubNavigation: React.FC<{ navChildren: LinkT[] }> = ({ navChildren }) => (
  <Container>
    {navChildren.map(({ url, name }) => (
      <NavigationItem href={url}>{name}</NavigationItem>
    ))}
  </Container>
);

const Navigation = () => (
  <Container>
    {data.map(({ name, url, haveChildren, navChildren }) => (
      <li>
        <NavigationItem href={url}>{name}</NavigationItem>
        {haveChildren && <SubNavigation navChildren={navChildren as LinkT[]} />}
      </li>
    ))}
  </Container>
);

export default Navigation;
