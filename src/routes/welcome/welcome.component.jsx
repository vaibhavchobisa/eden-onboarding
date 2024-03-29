import "./welcome.styles.scss";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Welcome = ({ setPath }) => {
    setPath(window.location.pathname);

    const {
        setFormFields,
        formFields,
        fullName,
        displayName
    }
        = useContext(AppContext);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        navigate("/workspace");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="welcome-container">
            <div className="welcome">
                <h2>Welcome! First things first...</h2>
                <p>You can always change them later.</p>
            </div>
            <form onSubmit={onSubmitHandler} className="form">
                <label htmlFor="fullName">Full Name</label>
                <input required placeholder="Steve Jobs" type="text" name="fullName" id="fullName" value={fullName} onChange={handleChange} />
                <label htmlFor="displayName">Display Name</label>
                <input required placeholder="Steve" type="text" name="displayName" id="displayName" value={displayName} onChange={handleChange} />
                <Button type="submit">Create Workspace</Button>
            </form>
        </div>
    );
};

export default Welcome;