import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import EditCategoryHook from '../../../hook/category/edit-category-hook'
import { ToastContainer } from 'react-toastify';

const AdminEditCategory = () => {

    const [img,name,selectedFile,loading,isPress,handelSubmit,onImageChange, onChangeName, onChangeParentCatId,category] = EditCategoryHook();

    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label htmlFor="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer",objectFit:'contain'}}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                            className="input-form d-none mt-3 px-3 py-1"
                        />
                    </div>

                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />

                    {category&&category.data&&category.data.length > 0 ?
                        <select name="parent_cat_id" onChange={onChangeParentCatId} className="select mt-3 px-2" value={selectedFile}>
                            <option value="val">اختر تصنيف إذا كان تصنيف فرعي (اختياري)</option>
                            {category.data.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                        </select>
                    : null}

                </Col>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminEditCategory
