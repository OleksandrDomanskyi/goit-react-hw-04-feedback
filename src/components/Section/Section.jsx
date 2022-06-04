import PropTypes from 'prop-types';

import styles from './section.module.scss';

const Section = ({title, children}) => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </section>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;