import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductsItems } from '../features/products/productsSlice'

const SharedLayout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsItems())
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default SharedLayout
