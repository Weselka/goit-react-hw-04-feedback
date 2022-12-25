import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;
  width: ${props => props.theme.spacing(120)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
`;