import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as WrapperPopper } from '~/component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items, onClickItem }) {
    // Xử lý logic nhiều lớp (nếu clicks vào sẽ push vào cuối array và lấy nó render, back thì pop nó đi sẽ lấy cái trước đó của array)
    const [history, setHistory] = useState([{ data: items }]); // mảng 1 phần tử là 1 object có key là data: []
    const current = history[history.length - 1];    

    const renderItems = () => {
        
        return current.data.map((item, index) => {
                const isParent = item.children

                return <MenuItem onClick={() =>{
                    if(isParent){
                        setHistory(pre => [ ...pre, item.children])
                    } else {
                        onClickItem(item)
                    }
                }}
                data={item}
                key={index}
            />;
        })
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            offset={[10, 10]}
            render={(attrs) => (
                <div className={cx('menu-option')} content="Tìm kiếm" tabIndex="-1" {...attrs}>
                    <WrapperPopper classNames={cx('menu-popper')}>
                        {history.length > 1 && <Header onBack={() => 
                            setHistory(pre => pre = pre.slice(0, pre.length - 1))} 
                        />}
                        {renderItems()}
                    </WrapperPopper>
                </div>)}
            onHide={() => setHistory(pre => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
