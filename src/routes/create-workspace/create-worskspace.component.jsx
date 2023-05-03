import "./create-workspace.styles.scss";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const defaultFormFields = {
    workspaceName: '',
    workspaceUrl: ''
};

const CreateWorkspace = ({ setPath }) => {

    setPath(window.location.pathname);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { workspaceName, workspaceUrl } = formFields;

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        navigate("/usage")
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="workspace-container">
            <div className="workspace">
                <h2>Let's set up a home for all your work</h2>
                <p>You can always create another workspace later.</p>
            </div>
            <form onSubmit={onSubmitHandler} className="form-2">
                <label htmlFor="workspaceName">Workspace Name</label>
                <input className="first" required type="text" placeholder="Swimming Tracker" name="workspaceName" id="workspaceName" value={workspaceName} onChange={handleChange} />
                <label htmlFor="workspaceUrl">Workspace URL <span>(optional)</span></label>
                <div>
                    <input className="disabled" disabled type="text" value="www.eden.com/" />
                    <input className="second" type="text" placeholder="swimming-tracker" name="workspaceUrl" id="workspaceUrl" value={workspaceUrl.toLocaleLowerCase()} onChange={handleChange} />
                </div>
                <Button type="submit">Create Workspace</Button>
            </form>
        </div>
    );
};

export default CreateWorkspace;