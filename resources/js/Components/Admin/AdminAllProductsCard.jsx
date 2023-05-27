import React, { useState } from 'react'
import { Col,Card,Row, Modal,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productAction'
const AdminAllProductsCard = ({product}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const handleDelete = async () => {
        await dispatch(deleteProduct(product.id));
        setShow(false)
        window.location.reload()
    };

    console.log(product);

    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <div className="font">تاكيد الحذف</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="font">هل انت متاكد من عملية حذف المنتج</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" onClick={handleDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit" onClick={handleShow}>ازاله</div>
                        <Link to={`/admin/editproduct/${product.id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={'/products/'+product.id} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%", objectFit: 'contain' }} src={product.images[0]} />
                    <Card.Body>
                        <div className="card-title">
                            {product.name}
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="card-rate">{product.ratings_qty}</div>
                            <div className="d-flex">
                                <div className="card-currency mx-1">جنيه</div>
                                <div className="card-price">{product.price}</div>
                            </div>
                        </div>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
