import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/075720524e0119d1e23aae89160e30f4~c5_100x100.jpeg?x-expires=1682060400&x-signature=MGvPjQKOswy8%2BZtjrU1NZHnu7cU%3D" alt="Account" />
            <div className={cx('info')} >
                <h4 className={cx('name')}>
                    Meo Se Gay
                    <FontAwesomeIcon className={cx('check')} icon={ faCheckCircle } />
                </h4>
                <span className={cx('username')}>daolemeo69</span>
            </div>
        </div>
    );
}

export default AccountItem;