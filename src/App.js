import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetails";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path= "/products" element= {<ProductsPage />}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinations);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
