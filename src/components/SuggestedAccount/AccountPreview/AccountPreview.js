import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/119ebd77f81516effcc27d507c29fd7e.jpeg?x-expires=1683122400&x-signature=WWf3jm2e1jeXWtH%2ByfCXyJNOmyc%3D"
                    alt=""
                />

                <div>
                    <Button className={cx('follow-btn')} primary>Follow</Button>
                </div>
            </div>

            <div className={cx('info')}>
                <div className={cx('nickname')}>
                    <strong><h4 className={cx('username')}>manhtienkhoi</h4></strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Mạnh Tiến Khôi 🐯</p>
            </div>

            <div className={cx('statistics')}>
                <div className={cx('topic')}>
                    <p className={cx('value')}>5.8M </p>
                    <p className={cx('type')}>Followers</p>
                </div>
                <div className={cx('topic')}>
                    <p className={cx('value')}>420.2M </p>
                    <p className={cx('type')}>Likes</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
