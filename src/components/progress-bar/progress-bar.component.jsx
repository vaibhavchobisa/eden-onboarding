import { useContext } from "react";
import { ClickContext } from "../../context/click.context";
import "./progress-bar.styles.scss";

// const goTo = { welcome: '/', workspace: '/workspace', usage: '/usage' }

const ProgressBar = () => {
    const { isFirstClicked, isSecondClicked, isThirdClicked } = useContext(ClickContext);

    let addClass;

    if (isFirstClicked) {
        addClass = "active-2";
    }
    if (isSecondClicked) {
        addClass = "active-3";
    }
    if (isThirdClicked) {
        addClass = "active-4";
    }

    return (
        <div className="container">
            <ul className="progressbar">
                <li className={`active-1 ${addClass}`}></li>
                <li className=""></li>
                <li className=""></li>
                <li className=""></li>
            </ul>
        </div>
    );
};

export default ProgressBar;