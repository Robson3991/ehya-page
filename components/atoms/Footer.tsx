import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    min-width: 1440px;
    margin: 0 auto;
  }
`;

const Footer = () => (
  <Wrapper>
    <svg
      width="2160"
      viewBox="0 0 2160 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Wave"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
        fill="#0D2436"
      />
    </svg>
  </Wrapper>
);

export default Footer;
