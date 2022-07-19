import "./usage.styles.scss";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClickContext } from "../../context/click.context";

const Usage = () => {

    const { setIsThirdClicked } = useContext(ClickContext);

    const navigate = useNavigate();
    const onNavigateHandler = () => {
        setIsThirdClicked(true);
        navigate("/success")
    };

    return (
        <div className="usage-container">
            <h2>How are you planning to use Eden?</h2>
            <p>We'll streamline your setup experience accordingly.</p>
            <div className="card-container">
                <div className="cards">
                    <div className="card-1">
                        <img src="./logo/person.png" alt="for-myself-logo" />
                        <h3>For myself</h3>
                        <p>Write better. Think more clearly. Stay organized.</p>
                    </div>
                    <div className="card-2">
                        <img src="./logo/team.png" alt="team-logo" />
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