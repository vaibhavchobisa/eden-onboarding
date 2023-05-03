import "./success.styles.scss";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { defaultFormFields } from "../../context/app.context";

const Success = ({ setPath }) => {
    setPath(window.location.pathname);

    const { displayName, setFormFields } = useContext(AppContext);
    const navigate = useNavigate();
    const onNavigateHandler = () => {
        setFormFields(defaultFormFields);
        navigate("/");
    };

    return (
        <div className="success-container">
            <img src="./logo/swoosh.png" alt="swoosh" />
            <h2>Congratulations, {displayName}!</h2>
            <p>You have completed onboarding, you can start using the Eden!</p>
            <Button onClick={onNavigateHandler}>Launch Eden</Button>
        </div>
    );
};

export default Success;