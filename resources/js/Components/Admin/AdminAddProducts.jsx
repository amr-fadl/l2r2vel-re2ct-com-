import React from 'react'
import { Row, Col } from 'react-bootstrap'
import add from '../../images/add.png'
import Multiselect from 'multiselect-react-dropdown'
import DropzoneComponent from './AdminDropzoneComponent';

import { CompactPicker } from 'react-color';
import { ToastContainer } from 'react-toastify';
import addProductHook from './../../hook/product/add-product-hook';


const AdminAddProducts = () => {

    const [
        images,setImages,name,setName,
        desc,setDesc,price,setPrice,
        discount,setDiscount,qty,setQty,
        cat,setCat,subCat,setSubCat,
        subCatOption,setSubCatOption,brandId,setBrandId,
        colors,setColors,showColor,setShowColor,
        category,onChangeCat,brand,
        errors, setErrors,onSelect,onRemove,
        colorChange,removeColor,handelSubmit,
        validate,
    ] = addProductHook();

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <div>
                        <DropzoneComponent
                            setImages={setImages}
                            changeImages={() => setErrors({ ...errors, images: '' })}
                        />
                        {errors.images && (
                            <p className="text-danger mb-0">{errors.images}</p>
                        )}
                    </div>

                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setErrors({ ...errors, name: '' })
                        }}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    {errors.name && (
                        <p className="text-danger mb-0">{errors.name}</p>
                    )}

                    <textarea
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                            setErrors({ ...errors, desc: '' })
                        }}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    {errors.desc && (
                        <p className="text-danger mb-0">{errors.desc}</p>
                    )}

                    <input
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value)
                            setErrors({ ...errors, price: '' })
                        }}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر المنتج"
                    />
                    {errors.price && (
                        <p className="text-danger mb-0">{errors.price}</p>
                    )}

                    <input
                        value={discount}
                        onChange={(e) => {
                            setDiscount(e.target.value)
                            setErrors({ ...errors, discount: '' })
                        }}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الخصم"
                    />
                    {errors.discount && (
                        <p className="text-danger mb-0">{errors.discount}</p>
                    )}

                    <input
                        value={qty}
                        onChange={(e) => {
                            setQty(e.target.value)
                            setErrors({ ...errors, qty: '' })
                        }}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكميه المتاحه"
                    />
                    {errors.qty && (
                        <p className="text-danger mb-0">{errors.qty}</p>
                    )}

                    <select
                        multiple={false}
                        value={cat}
                        onChange={(e) => {
                            onChangeCat(e)
                            setErrors({ ...errors, cat: '' })
                        }}
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="">التصنيف</option>
                        {
                            category.data && category.data.length > 0 ?
                                category.data.filter(cat => cat.parent == null).map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            : <option>لا يوجد تصنيفات</option>
                        }
                    </select>
                    {errors.cat && (
                        <p className="text-danger mb-0">{errors.cat}</p>
                    )}

                    {subCatOption.length > 0 && <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={subCatOption}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />}
                    {errors.subCat && (
                        <p className="text-danger mb-0">{errors.subCat}</p>
                    )}

                    <select
                        value={brandId}
                        // onChange={e => setBrandId(e.target.value)}
                        onChange={e=>{
                            setBrandId(e.target.value)
                            setErrors({...errors,brandId: ''})
                        }}
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="">الماركة</option>
                        {
                            brand.data && brand.data.length > 0 ?
                                brand.data.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            : null
                        }
                    </select>
                    {errors.brandId && (
                        <p className="text-danger mb-0">{errors.brandId}</p>
                    )}

                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex" style={{position: 'relative'}}>
                        <input
                            type="hidden"
                        />

                        {
                            colors.length > 0 ? colors?.map((color,index) =>
                                <div
                                    onClick={() => removeColor(color)}
                                    key={index}
                                    className="color ms-2 border  mt-1"
                                    style={{ backgroundColor: color }}
                                ></div>
                            ): null
                        }

                        <img onClick={() => setShowColor(!showColor)} src={add} alt="" width="30px" height="35px" className="" style={{cursor: 'pointer'}}/>
                        {showColor ? <div style={{position:'absolute',right:'0',top: '115%'}}><CompactPicker onChangeComplete={colorChange} /></div> : null}

                    </div>
                </Col>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2" onClick={(e) => {
                        if (validate()) {
                            handelSubmit(e);
                        }
                    }} >حفظ التعديلات</button>
                </Col>
                <ToastContainer />
            </Row>
        </div>
    )
}

export default AdminAddProducts
