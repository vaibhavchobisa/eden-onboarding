import "./progress-bar.styles.scss";

const ProgressBar = ({ path }) => {

    let addClass;

    if (path === '/workspace') {
        addClass = "active-1 active-2";
    }
    else if (path === '/usage') {
        addClass = "active-1 active-3";
    }
    else if (path === '/success') {
        addClass = "active-1 active-4";
    }
    else if (path === '/') {
        addClass = "active-1";
    }

    return (
        <div className="container">
            <ul className="progressbar">
                <li className={addClass}></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default ProgressBar;