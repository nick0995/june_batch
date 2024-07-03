import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
