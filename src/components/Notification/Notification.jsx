import PropTypes from 'prop-types';

import styles from './notification.module.scss';

const Notification = ({message}) => {

    return (
        <p className={styles.item}>{message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;