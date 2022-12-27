import PropTypes from 'prop-types';
import { SectionItem, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionItem>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionItem>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  // children: PropTypes.oneOfType([
  //       PropTypes.arrayOf(PropTypes.node),
  //       PropTypes.node
  //   ]).isRequired
  // children: PropTypes.oneOfType([
  //   PropTypes.shape({
  //     type: PropTypes.oneOf([MyComponent]),
  //   }),
  //   PropTypes.arrayOf(
  //     PropTypes.shape({
  //       type: PropTypes.oneOf([MyComponent]),
  //     })
  //   ),
  // ]).isRequired,
};
