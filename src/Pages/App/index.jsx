import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NoFound from "../NoFound";
import Navbar from "../../Components/Navbar";

const AppRouter = () => {
  let router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sing-in", element: <SignIn /> },
    { path: "/*", element: <NoFound /> },
  ]);
  return router;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <Navbar/>
      </BrowserRouter>
    </>
  );
};

export default App;
