import { Header, StyledContainer, Logos, Logo } from './Sponsors.styles';
import data from './SponsorsData';

const Sponsors = () => (
  <StyledContainer as="section">
    <Header>Sponsors of TheFutureTalks Conference</Header>
    <Logos>
      {data.map((image) => (
        <Logo>
          <img src={`/images/companies/${image}.svg`} />
        </Logo>
      ))}
    </Logos>
  </StyledContainer>
);

export default Sponsors;
