import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Category from "../pages/Category";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
    {
        path:"/",
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