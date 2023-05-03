import "./header.styles.scss";
import ProgressBar from "../../components/progress-bar/progress-bar.component";
import { Outlet } from "react-router-dom";

const Header = ({ path }) => {
    return (
        <>
            <div className="header">
                <div className="content">
                    <img src="./logo/logo.png" alt="logo" />
                    <h1>Eden</h1>
                </div>
                <ProgressBar path={path} />
            </div>
            <Outlet />
        </>
    );
};

export default Header;