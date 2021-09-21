import {
  Wrapper,
  Content,
  HeroImage,
  Paragraph,
  Boxes,
  StyledContainer,
} from './Hero.styles';
import Image from 'next/image';
import Box from 'components/molecules/Box/Box';

const Hero = () => (
  <StyledContainer>
    <Wrapper>
      <Content>
        <h1>TheFutureTalks Conference</h1>
        <Paragraph>
          Event madness gathering innovators, startups & tech enthusiasts in
          Special Region of Yogyakarta
        </Paragraph>
        <Boxes>
          <Box
            header="18 November 2019"
            text="25+ top notch speakers @ Sebostudio Gallery Kreavi"
            link={{
              url: '#',
              text: 'Conference',
            }}
            filled
          />
          <Box
            header="100+ startups"
            text="Top 8 startups competingin final @ TheFutureTalks Conference 2019"
            link={{
              url: '#',
              text: 'Startup Awards',
            }}
          />
        </Boxes>
      </Content>
      <HeroImage>
        <Image
          src="/images/tiles.png"
          alt="Feature talks image"
          width="635"
          height="588"
        />
      </HeroImage>
    </Wrapper>
  </StyledContainer>
);

export default Hero;
