import Header from "./Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <div className="wrapper">
                <SideBar />
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;