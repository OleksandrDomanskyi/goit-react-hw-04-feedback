import PropTypes from 'prop-types';

import styles from './feedbackoptions.module.scss';

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    const elements = options.map((option, index) => (
        <li className={styles.item} key={index}>
            <button className={styles.btn} onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
    ))
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
};

FeedbackOptions.defaultProps = {
    options: [],
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;