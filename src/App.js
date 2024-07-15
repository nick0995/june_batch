import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Product";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path= "/products" element= {<ProductsPage />}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinations);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
