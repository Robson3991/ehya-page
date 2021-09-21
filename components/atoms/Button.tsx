import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import ArrowRight from 'components/atoms/icons/ArrowRight';

interface ButtonProps {
  isBig?: Boolean;
  withArrow?: Boolean;
  isFilled?: Boolean;
  text: string;
  [x: string]: any;
}

const filledStyle = css`
  color: var(--color-white);
  background-color: var(--color-primary-light);

  &:hover {
    color: var(--color-primary-light);
    background-color: var(--color-white);
  }
`;

const notFilledStyle = css`
  color: var(--color-primary-light);
  background-color: var(--color-white);

  &:hover {
    color: var(--color-white);
    background-color: var(--color-primary-light);
  }
`;

type ButtonStylesType = Omit<ButtonProps, 'text'>;

const StyledButton = styled.button<ButtonStylesType>`
  padding: 13px 24px;
  font-size: 1.6rem;
  font-weight: bold;
  border: 2px solid var(--color-primary-light);
  border-radius: 8px;
  cursor: pointer;
  transition: color var(--transition), background-color var(--transition);

  ${({ isFilled }) => (isFilled ? filledStyle : notFilledStyle)}

  ${up('md')} {
    ${({ isBig }) =>
      isBig &&
      `
        padding: 16px 32px;
        font-size: 1.8rem;
    `}
  }

  ${({ withArrow }) =>
    withArrow &&
    `
        display: flex;
        align-items: center;
    `}

  svg {
    margin-left: 15px;
    fill: currentColor;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, withArrow, ...props }) => (
  <StyledButton withArrow={withArrow} {...props}>
    {text}
    {withArrow && <ArrowRight />}
  </StyledButton>
);

export default Button;
