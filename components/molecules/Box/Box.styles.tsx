import styled from 'styled-components';
import Checked from 'components/atoms/icons/Checked';
import { up, down } from 'styled-breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${up('md')} {
    &:not(:last-child) {
      border-right: 1px solid var(--color-light);
    }

    &:nth-child(odd) {
      padding-right: 24px;
    }

    &:nth-child(even) {
      padding-left: 24px;
    }
  }

  ${down('md')} {
    margin-bottom: 32px;
  }
`;

export const Header = styled.strong`
  margin-bottom: 9px;
  font-size: 1.6rem;
`;

export const Text = styled.p`
  max-width: 190px;
  color: var(--color-grey);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const CheckedIcon = styled(Checked)`
  margin: 24px 0 16px;
`;
