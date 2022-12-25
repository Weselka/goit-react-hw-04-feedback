import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;
