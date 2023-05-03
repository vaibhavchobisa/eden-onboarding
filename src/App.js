import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./routes/header/header.component";
import Welcome from "./routes/welcome/welcome.component";
import CreateWorkspace from "./routes/create-workspace/create-worskspace.component";
import Usage from "./routes/usage/usage.component";
import Success from "./routes/success/success.component";
import "./App.scss";

const App = () => {
  const [path, setPath] = useState('');

  return (
          <Routes>
            <Route path="/" element={<Header path={path} />}>
              <Route index element={<Welcome setPath={setPath} />} />
              <Route path="/workspace" element={<CreateWorkspace setPath={setPath} />} />
              <Route path="/usage" element={<Usage setPath={setPath} />} />
              <Route path="/success" element={<Success setPath={setPath} />} />
            </Route>
          </Routes>
  );
}

export default App;
