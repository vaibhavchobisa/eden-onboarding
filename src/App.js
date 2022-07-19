import { Routes, Route } from "react-router-dom";
import Header from "./routes/header/header.component";
import Welcome from "./routes/welcome/welcome.component";
import CreateWorkspace from "./routes/create-workspace/create-worskspace.component";
import Usage from "./routes/usage/usage.component";
import Success from "./routes/success/success.component";
import "./App.scss"

// rgba(102,77,229,255)

const App = () => {
  return (
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Welcome />} />
              <Route path="/workspace" element={<CreateWorkspace />} />
              <Route path="/usage" element={<Usage />} />
              <Route path="/success" element={<Success />} />
            </Route>
          </Routes>
  );
}

export default App;
