import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss"
import Header from "../components/Header";
import SideBar from "~/layouts/components/SideBar";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div style={{height: '2000px'}} className={cx('main')}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;