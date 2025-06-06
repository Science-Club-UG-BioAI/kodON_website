import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import Main from "./components/Main";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Main />
    </>
  );
}

export default App;
