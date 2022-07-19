import "./success.styles.scss";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate("");

    return (
        <div className="success-container">
            <img src="./logo/swoosh.png" alt="swoosh" />
            <h2>Congratulations, Steve!</h2>
            <p>You have completed onboarding, you can start using the Eden!</p>
            <Button onClick={onNavigateHandler}>Launch Eden</Button>
        </div>
    );
};

export default Success;