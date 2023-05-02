import classNames from "classnames/bind";
import styles from './SideBar.module.scss'
import Menu, { MenuItem } from "./Menu";
import config from '~/config'
import { Home, HomeActive, UserGroup, UserGroupActive, Live, LiveActive } from '~/components/Icons'
import SuggestedAccount from "~/components/SuggestedAccount";

const cx = classNames.bind(styles)

function SideBar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<Home />} iconActive={<HomeActive />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroup />} iconActive={<UserGroupActive />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<Live />} iconActive={<LiveActive />} />
            </Menu>

            <SuggestedAccount lable="Suggested Accounts" />
            {/* <SuggestedAccount lable="Following Accounts" /> */}
        </aside>
     );
}

export default SideBar;