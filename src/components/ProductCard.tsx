// Product card. The product image carries no alt attribute, so the file
// name is announced instead of the product. axe-core rule: image-alt.
// Rendered once per product, so one component accounts for every
// instance on the page.
import { IconButton } from "./IconButton.tsx";

export interface Product {
  id:    string;
  name:  string;
  price: string;
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card" data-component="ProductCard">
      <img className="product-card__image" src={product.image} />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">{product.price}</p>
      <div className="product-card__actions">
        <IconButton icon="cart" />
        <IconButton icon="heart" />
        <a className="product-card__link" href={`/products/${product.id}`}>
          Read more
        </a>
      </div>
    </article>
  );
}
