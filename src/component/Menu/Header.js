import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ onBack }) {
    return (
        <div className={cx('header-space')}>
            <div className={cx('header')}>
                <div className={cx('header-icon')} onClick={onBack}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <h4 className={cx('header-title')}>Language</h4>
            </div>
        </div>
    );
}

export default Header;
