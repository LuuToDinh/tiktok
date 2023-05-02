// import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss"
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles)

const renderPreview = (props) => (
    <div className={cx('preview')} tabIndex="-1" {...props}>
        <WrapperPopper>
            <AccountPreview />
        </WrapperPopper>
    </div>
)

function AccountItem() {
    return (
        <Tippy
            // visible
            interactive
            placement="bottom-start"
            delay={[800, 0]}
            offset={[-20, 0]}
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b0bf939e0a3520285396803f9f356b98~c5_100x100.jpeg?x-expires=1683118800&x-signature=GwTSPEchwD7K8%2BTAFpsiRCL8qj4%3D" alt="" />
            
                <div className={cx('info')}>
                    <div className={cx('nickname')}>
                        <h4 className={cx('username')}><strong>caocuongvu</strong></h4>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </div>
                    <p className={cx('name')}>Cao Cường Vũ</p>
                </div>
            </div>
        </Tippy 
        
        >
    );
}

AccountItem.propTypes = {
    
}

export default AccountItem;