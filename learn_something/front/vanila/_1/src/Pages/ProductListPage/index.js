import { request } from '../../api/api';

export default function ProductListPage({ $target }) {
  // initialize
  const $page = document.createElement('div');
  $page.className = 'ProductListPage';
  $page.innerHTML = `<h1>상품 목록</h1>`;
  // state
  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    const product = await request('/products');
    this.setState(product);
  };

  this.render = () => {
    $target.appendChild($page);
  };

  fetchProducts();
}
