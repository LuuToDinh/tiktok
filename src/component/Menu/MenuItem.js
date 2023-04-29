import Button from '~/component/Button';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return <Button className={cx('menu-item', { separate: data.separate })} to={data.to} leftIcon={data.icon} onClick={onClick}>{data['title']}</Button>;
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem;
