import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const SingleProduct = () => {
  const { productID } = useParams()
  const { productsItems, isLoading } = useSelector((state) => state.products)

  const singleProduct = productsItems.find((item) => item.id === productID)

  console.log(singleProduct)
  const { name, image, company, description } = singleProduct

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='img-company'>
          <div className='photo'>
            <img className='img' src={image} alt='' />
          </div>
          <div className='company'>
            <h4>{name}</h4>
            <h4>{company}</h4>
          </div>
        </div>
      </div>

      <hr />
      <h2 className='title'>{company}</h2>
      <div className='title-underline'></div>
      <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 2rem;
  .img-company {
    display: flex;
    gap: 1rem;
  }
  .photo {
    overflow: hidden;
    height: 300px;
    width: 300px;
  }
`

export default SingleProduct
