import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NoFound from "../NoFound";

const AppRouter = () => {
  let router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/MyOrders", element: <MyOrders /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NoFound /> },
  ]);
  return router;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
