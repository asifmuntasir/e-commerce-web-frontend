import React from 'react';
import styled from 'styled-components';
import FilterSection from './SubComponents/FilterSection';
import ProductList from './SubComponents/ProductList';
import SortProduct from './SubComponents/SortProduct';


const AllProducts = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-product">
            <SortProduct />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


export default AllProducts;
