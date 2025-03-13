import Home from "../pages/Home/Home";

// Users
import Users from "../pages/Users/Users";
import UserList from "../pages/Users/UserList"
import NewUser from "../pages/Users/NewUser";

// Products
import Products from "../pages/Products/Products";
import ProductsList from "../pages/Products/ProductsList";
import NewProduct from "../pages/Products/NewProduct";


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = [
  { path: '/', element: <Home /> },
  {
    path: '/users',
    element: <Users />,
    children: [
      { path: '', element: <UserList /> },
      { path: 'new', element: <NewUser /> },
    ]
  },
  {
    path: '/products',
    element: <Products />,
    Children: [
      { path: '', element: <ProductsList /> },
      { path: 'new', element: <NewProduct /> }
    ]
  },
];

export default MainRoutes;
