import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Category from "../pages/Category";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import MainLayout from "../layout/MainLayout";
import App from "../App";

const router = createBrowserRouter([
    {   
        path: "/",
        element: <App />,
        children: [
    {
        index: true,
        element:<HomePage />
    },
    {
        path:"/cart",
        element:<Cart />
    },
    {
        path:"/category/:categoryName",
        element:<Category />
    },
    {
        path:"/product/:id",
        element:<ProductDetails />
    },
    ],
    },
]);
export default router;