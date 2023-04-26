import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCircleNotch,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import 'tippy.js/dist/tippy.css';

import { Wrapper as WrapperPopper } from '~/component/Popper';
import AccountItem from '../../AccountItem';
import styles from './Search.module.scss'
import MenuItem from '~/component/Menu/MenuItem';

const cx = classNames.bind(styles);

// Hiện tipyy cần: focus và có search result
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [focusSearch, setFocusSearch] = useState(false)
    const [loadingResult, setLoadingResult] = useState(false)

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        // setSearchResult([])
    }

    const handleHideResult = () => {
        setFocusSearch(false)
    }

    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        
        setLoadingResult(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}a&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoadingResult(false)
            })

    }, [searchValue]);

    return (
        <TippyHeadless
            interactive
            visible={focusSearch && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} content="Tìm kiếm" tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(data => {
                            return <AccountItem key={data.id} data={data} />
                        })}
                    </WrapperPopper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    className={cx('input')}
                    type="text"
                    placeholder="Search"
                    onInput={e => {setSearchValue(e.target.value)}}
                    onFocus={() => setFocusSearch(true)}
                />
                {!!searchValue && !loadingResult && <button
                    className={cx('close')}
                    onClick={handleClear}    
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>}
                {loadingResult && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
