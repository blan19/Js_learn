import CartPage from './Pages/CartPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import ProductListPage from './Pages/ProductListPage';
import './styles.css';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    if (pathname === '/') {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf('/product/') === 0) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === '/cart') {
      new CartPage({ $target }).render();
    }
  };

  this.route();
}
