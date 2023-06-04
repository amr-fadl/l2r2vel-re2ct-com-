import React from "react";
import AdminSideBarItem from "./AdminSideBarItem";

const AdminSideBar = () => {

    const sideBardata = [
        {
            name: 'order',
            title: 'اداره الطلبات',
            icon: "bi-question-circle-fill",
            path: "/admin/allorders"
        },
        {
            name: 'product',
            title: "المنتجات",
            icon: "bi-gear-fill",
            childrens: [
                {
                    title: 'اداره المنتجات',
                    icon: "bi-question-circle-fill",
                    path: "/admin/allproducts",
                },
                {
                    title: 'اضف منتج',
                    icon: "bi-question-circle-fill",
                    path: "/admin/addproduct"
                },
            ]
        },
        {
            name: 'brand',
            title: 'اضف ماركه',
            icon: "bi-question-circle-fill",
            path: "/admin/addbrand"
        },
        {
            name: 'category',
            title: "التصنيفات",
            icon: "bi-gear-fill",
            childrens: [
                {
                    title: "اداره التصنيفات",
                    icon: "bi-house-fill",
                    path: "/admin/allcategory"
                },
                {
                    title: "اضف تصنيف",
                    icon: "bi-house-fill",
                    path: "/admin/addcategory"
                },
            ]
        },
    ];

    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <ul className="px-2">
                    { sideBardata.map((item, index) => <AdminSideBarItem key={index} item={item} />) }
                </ul>
            </div>
        </div>
    );
};

export default AdminSideBar;
