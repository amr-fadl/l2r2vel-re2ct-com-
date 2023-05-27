import React from 'react'
import { Row } from 'react-bootstrap'
import sidebarSearchHook from '../../hook/search/sidebar-search-hook'

const SideFilter = () => {

    const [category,brand,clickCategory,clickBrand] = sidebarSearchHook()

    return (
        <div className="mt-3">
            <Row>
            <div className="d-flex flex-column mt-2">
                <div className="filter-title">الفئة</div>
                <div className="d-flex mt-2 cursor-pointer w-auto">
                    <label htmlFor='checkbox-1' className="filter-sub cursor-pointer d-flex align-items-center">
                        <input onChange={e => clickCategory(e)} id='checkbox-1' className="ms-2 cursor-pointer category-all" type="checkbox" value="0" />
                        الكل
                    </label>
                </div>
                {
                    category ? category.map((item,index) =>
                        <div key={index} className="d-flex mt-2 cursor-pointer w-auto">
                            <label htmlFor={'checkbox-'+item.id} className="filter-sub cursor-pointer d-flex align-items-center">
                                <input onChange={e => clickCategory(e)} id={'checkbox-'+item.id} className="ms-2 cursor-pointer category-checkbox" type="checkbox" value={item.id} />
                                {item.name}
                            </label>
                        </div>
                    ) : null
                }
            </div>

            <div className="d-flex flex-column mt-2">
                <div className="filter-title mt-3">الماركة</div>
                <div className="d-flex mt-2 cursor-pointer w-auto">
                    <label htmlFor='checkbox-2-1' className="filter-sub cursor-pointer d-flex align-items-center">
                        <input onChange={e => clickBrand(e)} id='checkbox-2-1' className="ms-2 cursor-pointer brand-all" type="checkbox" value="0" />
                        الكل
                    </label>
                </div>
                {
                    brand ? brand.map((item,index) =>
                        <div key={index} className="d-flex mt-2 cursor-pointer w-auto">
                            <label htmlFor={'checkbox-2-'+item.id} className="filter-sub cursor-pointer d-flex align-items-center">
                                <input onChange={e => clickBrand(e)} id={'checkbox-2-'+item.id} className="ms-2 cursor-pointer brand-checkbox" type="checkbox" value={item.id} />
                                {item.name}
                            </label>
                        </div>
                    ) : null
                }
            </div>

            <div className="filter-title my-3">السعر</div>
            <div className="d-flex">
                <p className="filter-sub my-2">من:</p>
                <input
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
                />
            </div>
            <div className="d-flex">
                <p className="filter-sub my-2">الي:</p>
                <input
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
                />
            </div>
            </Row>
        </div>
    )
}

export default SideFilter
