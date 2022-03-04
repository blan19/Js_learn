import './styles.css';

export default function CartPage({ $target }) {
  const $page = document.createElement('div');

  $page.className = 'CartPage';

  $page.innerHTML = `<h1>Cart Page</h1>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
