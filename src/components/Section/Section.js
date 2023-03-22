import PropTypes from 'prop-types';
import { SectionStats } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
  <SectionStats>
    <h2>{title}</h2>
    {children}
  </SectionStats>)
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};