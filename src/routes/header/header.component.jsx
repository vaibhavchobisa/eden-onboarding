import "./header.styles.scss";
import ProgressBar from "../../components/progress-bar/progress-bar.component";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="content">
                    <img src="./logo/logo.png" alt="logo" />
                    <h1>Eden</h1>
                </div>
                <ProgressBar />
            </div>
            <Outlet />
        </>
    );
};

export default Header;