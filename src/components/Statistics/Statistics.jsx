import PropTypes from 'prop-types';

import { Results } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <>
    <Results>Good: {good}</Results>
    <Results>Neutral: {neutral}</Results>
    <Results>Bad: {bad}</Results>
    <Results>Total: {total}</Results>
    <Results>Positive: {positivePercentage}%</Results>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
