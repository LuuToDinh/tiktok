import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faSignOut,
    faUser,
    faCloudUpload,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config'
import images from '~/assets/images';
import Menu from '~/component/Menu';
import Button from '~/component/Button';
import styles from './Header.module.scss'; // thứ tự import css sau ghi đè trước
import { Inbox, Message } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    title: 'English',
                    cap: 'en',
                },
                {
                    type: 'language',
                    title: 'Tiếng Việt',
                    cap: 'vi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark Mode',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];

const useLogin = true;

function Header() {
    const hanlderOnClickItem = (item) => {
        switch (item.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img className={cx('logo')} src={images.logo} alt="logo"></img>
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('action')}>
                    {useLogin ? (
                        <>
                            <Tippy content="Upload" className={cx('upload')}>
                                <button className={cx('btn-action')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" className={cx('message')}>
                                <button className={cx('btn-action')}>
                                    <Message />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" className={cx('inbox')}>
                                <button className={cx('btn-action')}>
                                    <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline target="_blank">
                                Upload
                            </Button>
                            <Button
                                className={cx('download')}
                                primary
                                disabled
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                                onClick={() => alert('Upload')}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu onClickItem={hanlderOnClickItem} items={useLogin ? userMenu : MENU_ITEMS}>
                        {useLogin ? (
                            <Image
                                className={cx('user-avatar')}
                                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/075720524e0119d1e23aae89160e30f4~c5_100x100.jpeg?x-expires=1682431200&amp;x-signature=mW%2FZDC4f1jhl9xN%2B2IXoZ1Mnqz8%3D'
                                alt="User avatar"
                                fallback="https://yt3.ggpht.com/IOaHOJq3ifwQ0jtc7XhCJ2tezUk6pzEy_WmzQIWSzZh8YKmKI3fChIAzxny9aGBCJmBa5QmAHMI=s88-c-k-c0x00ffffff-no-rj-mo"
                            />
                        ) : (
                            <button className={cx('more-option')}>
                                <FontAwesomeIcon className={cx('more-option-icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
