import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../redux/products/productActions'

import ProductComponent from '../components/ProductComponent'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ): (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4}>
                            <ProductComponent product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default HomeScreen