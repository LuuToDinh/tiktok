import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss"
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)

function SuggestedAccount({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{lable}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    lable: PropTypes.string.isRequired,
}

export default SuggestedAccount;