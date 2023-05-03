import "./usage.styles.scss";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Usage = ({ setPath }) => {

    setPath(window.location.pathname);

    const navigate = useNavigate();
    const onNavigateHandler = () => {
        navigate("/success")
    };

    const [isSelected1, setIsSelected1] = useState(true);
    const [isSelected2, setIsSelected2] = useState(false);

    const onClickHandler1 = (e) => {
        setIsSelected1(true);
        setIsSelected2(false);
    };

    const onClickHandler2 = (e) => {
        setIsSelected2(true);
        setIsSelected1(false);
    };

    return (
        <div className="usage-container">
            <h2>How are you planning to use Eden?</h2>
            <p>We'll streamline your setup experience accordingly.</p>
            <div className="card-container">
                <div className="cards">
                    <div className={`card-1 ${isSelected1 ? "selected" : ""}`} onClick={onClickHandler1}>
                        <img src={isSelected1 ? "./logo/person_blue.png" : "./logo/person.png"} alt="for-myself-logo" />
                        <h3>For myself</h3>
                        <p>Write better. Think more clearly. Stay organized.</p>
                    </div>
                    <div className={`card-2 ${isSelected2 ? "selected" : ""}`} onClick={onClickHandler2}>
                        <img src={isSelected2 ? "./logo/team_blue.png" : "./logo/team.png"} alt="team-logo" />
                        <h3>With my team</h3>
                        <p>Wikis, docs, tasks & projects, all in one place.</p>
                    </div>
                </div>
                <Button onClick={onNavigateHandler}>Create Workspace</Button>
            </div>
        </div>
    );
};

export default Usage;