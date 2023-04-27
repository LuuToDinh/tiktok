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

import * as searchService from '~/apiServices/searchService'
import { Wrapper as WrapperPopper } from '~/component/Popper';
import AccountItem from '../../AccountItem';
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles);

// Hiện tipyy cần: focus và có search result
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [focusSearch, setFocusSearch] = useState(false)
    const [loadingResult, setLoadingResult] = useState(false)

    const debouncedSearch = useDebounce(searchValue, 500)
    
    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        // setSearchResult([])
    }

    const handleHideResult = () => {
        setFocusSearch(false)
    }
    
    const handleInput = e => {
        const searchInputValue = e.target.value

        if(!searchInputValue.startsWith(' ')){
            setSearchValue(searchInputValue)
        }
    }

    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        
        // .then(res => res.json())
        const fetchApi = async () => {
            setLoadingResult(true)

            const res = await searchService.search(debouncedSearch)
            
            setSearchResult(res)
            setLoadingResult(false)
        }

        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);

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
                    onInput={handleInput}
                    onFocus={() => setFocusSearch(true)}
                />
                {!!searchValue && !loadingResult && <button
                    className={cx('close')}
                    onClick={handleClear}    
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>}
                {loadingResult && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}
                <button className={cx('search-btn')} onMouseDown={e => {e.preventDefault()}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
