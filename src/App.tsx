import { useEffect, useState } from "react";
import Filter from "./components/Filter-card";
import Header from "./components/Header";
import Listing from "./components/Listing-card";
import { ProductDTO } from "./models/productDTO";
import * as productService from "./services/product-service";
import { ContextListCount } from "./utils/context-products";

type QueryParams = {
  minPrice: number;
  maxPrice: number;
}

export default function ListinBody() {

  const MIN_PRICE = 0;
  const MAX_PRICE = Number.MAX_VALUE;

  const [queryParams, setQueryParams] = useState<QueryParams>({
    minPrice: MIN_PRICE,
    maxPrice: MAX_PRICE
  });
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [contextListCount, setContextListCount] = useState<number>(0);


  useEffect(() => {
    const newFilter = productService.findByPrice(queryParams.minPrice, queryParams.maxPrice);
    setProducts(newFilter);
    setContextListCount(newFilter.length);
  }, [queryParams]);


  function handleFilter(min: number, max: number) {
    const valueMin = min;
    const valueMax = max;
    setQueryParams({ minPrice: valueMin || MIN_PRICE, maxPrice: valueMax || MAX_PRICE });
  }
  return (

    <>
      <ContextListCount.Provider value={{ contextListCount, setContextListCount }}>
        <Header />
        <main>
          <section className="container section-filter">
            <Filter onNewFilter={handleFilter} />
            <div className="card-listing-main mt20">
              {
                products.map(
                  product =>
                    < Listing key={product.id} product={product} />
                )
              }

            </div>
          </section>
        </main>
      </ContextListCount.Provider>
    </>

  )
}


