import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleNotch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'; 
import { useState, useEffect } from 'react';

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as WrapperPopper } from '~/component/Popper'
import AccountItem from '../../AccountItem';
import Button from '~/component/Button';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setSearchResult([])
    }, [])
    
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="logo"></img>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                    <div className={cx('search-result')} content="Tìm kiếm" tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </WrapperPopper>
                    </div>
                    )}    
                >
                    <div className={cx('search')}>
                        <input className={cx('input')} type="text" placeholder='Search'></input>
                        <FontAwesomeIcon className={cx('close')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outline target="_blank" >Upload</Button>
                    <Button primary disabled onClick={() => alert('Upload')}>Log in</Button>
                </div>
            </div>
        </div>
     );
}

export default Header;