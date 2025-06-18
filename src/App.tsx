import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-r from-lazuli-900 to-lazuli-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
