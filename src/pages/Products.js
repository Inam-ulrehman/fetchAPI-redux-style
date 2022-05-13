import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Products = () => {
  const { productsItems, isLoading } = useSelector((state) => {
    return state.products
  })

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <div>
      {productsItems.map((item) => {
        const { id, name, image, price } = item
        return (
          <Wrapper key={id} className='container'>
            <div className='container-box'>
              <div className='image-container'>
                <img className='img' src={image} alt='' />
              </div>
              <div className='container-footer'>
                <h5>{name}</h5>
                <p className='price'>$ {price}</p>
              </div>
              <div className='link-container'>
                <Link className='link' to={`/products/${id}`}>
                  Moreinfo
                </Link>
              </div>
            </div>
          </Wrapper>
        )
      })}
    </div>
  )
}

const Wrapper = styled.article`
  position: relative;
  .image-container {
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 3rem;
  }
  .container-footer {
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
    display: flex;
    box-shadow: var(--shadow-3);
    justify-content: space-between;
  }
  .price {
    margin-right: 1rem;
  }
  .link-container {
    position: absolute;
    top: -5%;
    right: 43%;
    background: var(--primary-3);
    padding: 0.3rem;
    border-radius: 1rem;
    transition: var(--transition);
    :hover {
      background-color: var(--primary-4);
      transform: scale(1.1);
    }
    .link {
      color: white;
    }
  }
`

export default Products
