import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, classNames }) {
    return <div className={cx('wrapper', classNames)}>
        {children}
    </div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
}

export default Wrapper;
