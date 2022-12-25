import styled from '@emotion/styled';

export const ControlsBox = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing(3)};
  gap: ${props => props.theme.spacing(2)};
`;

export const Button = styled.button`
  align-self: flex-start;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(5)};
  border-radius: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.buttonBackground};
`;