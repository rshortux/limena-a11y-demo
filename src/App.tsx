import { ProductCard, type Product } from "./components/ProductCard.tsx";
import { PromoBanner } from "./components/PromoBanner.tsx";
import { PricingTable } from "./components/PricingTable.tsx";
import { IconButton } from "./components/IconButton.tsx";

const PRODUCTS: Product[] = [
  { id: "cedar-planter",   name: "Cedar planter box",      price: "$84.00",  image: "/img/planter.svg" },
  { id: "birch-stool",     name: "Birch step stool",       price: "$62.00",  image: "/img/stool.svg" },
  { id: "canvas-apron",    name: "Waxed canvas apron",     price: "$48.00",  image: "/img/apron.svg" },
  { id: "field-knife",     name: "Field knife",            price: "$110.00", image: "/img/knife.svg" },
  { id: "enamel-mug",      name: "Enamel camp mug",        price: "$18.00",  image: "/img/mug.svg" },
  { id: "wool-blanket",    name: "Wool picnic blanket",    price: "$96.00",  image: "/img/blanket.svg" },
  { id: "brass-hooks",     name: "Brass wall hooks",       price: "$24.00",  image: "/img/hooks.svg" },
  { id: "garden-shears",   name: "Garden shears",          price: "$39.00",  image: "/img/shears.svg" },
  { id: "linen-towel",     name: "Linen tea towel",        price: "$16.00",  image: "/img/towel.svg" },
  { id: "oak-board",       name: "Oak serving board",      price: "$72.00",  image: "/img/board.svg" },
  { id: "copper-kettle",   name: "Copper stovetop kettle", price: "$128.00", image: "/img/kettle.svg" },
  { id: "rope-basket",     name: "Rope storage basket",    price: "$44.00",  image: "/img/basket.svg" },
];

export function App() {
  return (
    <div className="page">
      <header className="site-header">
        <span className="site-header__mark">Northfield Supply</span>
        <nav className="site-header__nav">
          <a href="/shop">Shop</a>
          <a href="/journal">Journal</a>
          <a href="/stockists">Stockists</a>
        </nav>
        <div className="site-header__actions">
          <IconButton icon="share" />
          <IconButton icon="cart" />
        </div>
      </header>

      <main className="main">
        <PromoBanner
          headline="Autumn restock"
          body="Everything below is back in the warehouse, including the sizes that sold out in June. Free standard shipping on orders over $75."
        />

        <h2 className="section-heading">Shop all</h2>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <h2 className="section-heading">Shipping rates</h2>
        <PricingTable />
      </main>

      <footer className="site-footer">
        <p>Northfield Supply is a fictional storefront used as an accessibility test fixture.</p>
      </footer>
    </div>
  );
}
