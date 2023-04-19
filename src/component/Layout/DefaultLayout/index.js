import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.css"
import Header from "../components/Header";
import SideBar from "./SideBar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('main')}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;