import React, { useState } from 'react'
import { Col,Card,Row, Modal,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategory, getPageCategory } from '../../../redux/actions/categoryAction'
import notify from '../../../hook/useNotifaction'
import { ToastContainer } from 'react-toastify'

const AdminCard = ({data,path,pageNum}) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        // hide modal
        setShow(false);

        // action delete
        await dispatch(deleteCategory(data.id))

        await dispatch(getPageCategory(pageNum))

        // show message
        notify('تم الحذف','warn')
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <div className="font">تاكيد الحذف</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="font">هل انت متاكد من عملية حذف التصنيف</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="outline-success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="outline-danger" onClick={handleDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
            <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
                <Card
                    className="my-2 justify-content-between"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#FFFFFF",
                    }}>
                    <Row className="d-flex justify-content-center px-4">
                        <Col className="d-flex justify-content-between pt-4 pb-3">
                            <button type="button" class="btn btn-outline-danger d-inline item-delete-edit" style={{borderColor:'#bb868b'}} onClick={handleShow}>ازاله</button>
                            <Link to={`/admin/${path}`} className='btn btn-outline-secondary' style={{ textDecoration: "none" }}>
                                تعديل
                            </Link>
                        </Col>
                    </Row>
                    <Link style={{ textDecoration: "none" }} className='d-flex justify-content-center align-items-center flex-column'>
                        <Card.Img style={{ height: "200px", width: "200px", objectFit: 'contain', maxWidth: '70%' }} className='m-auto' src={data.image} />
                        <Card.Body className='w-100'>
                            <div className="card-title d-flex justify-content-between w-100">
                                <div>اسم التصنيف</div>
                                <div>{data.name}</div>
                            </div>
                                <div className="d-flex justify-content-between w-100 border-top pt-2 mt-3">
                                    <div className="text-dark">تابع الي</div>
                                    <div className="d-flex text-dark">{data.parent && data.parent.name ? data.parent.name : 'تصنيف رئيسي'}</div>
                                </div>
                        </Card.Body>
                    </Link>
                </Card>
                <ToastContainer />

            </Col>
        </>
    )
}

export default AdminCard
