import styled from '@emotion/styled';

export const StatisticsBox = styled.ul`
  margin-top: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(5)};
`;

export const StatisticsItem = styled.li`
  font-weight: 700;
  margin-top: ${props => props.theme.spacing(3)};
  letter-spacing: ${props => props.theme.spacing(0.2)};
  margin-bottom: 0;
`;
