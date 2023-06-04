import { useState } from "react"
import arrow from '../../../images/211687_down_arrow_icon.svg'
import { Link, useLocation } from "react-router-dom";

function AdminSideBarItem({item}){

    const location = useLocation().pathname;
    const [open, setOpen] = useState(false)

    if(item.childrens){
        return (
            <li className={`list-menu ${item.childrens.map(item => item.path).includes(location) || open || location.includes(item.name) ? 'active' : ''}`}>
                <div className="title-list-menu admin-side-text my-1 border-bottom d-flex justify-content-between"  onClick={() => setOpen(!open)}>
                    {item.title}
                    <img src={arrow} alt="arrow" style={{height: '15px'}} />
                </div>
                <div className="child-list-menu">
                    <ul className="px-3">
                        { item.childrens.map((child, index) => <AdminSideBarItem key={index} item={child} />) }
                    </ul>
                </div>
            </li>
        )
        
    }else{
        return (
            <li className={`list-menu ${location == item.path ? 'active' : ''}`}>
                <Link to={item.path} style={{ textDecoration: "none" }} >
                    <div className="admin-side-text my-1 border-bottom">
                        {item.title}
                    </div>
                </Link>
            </li>
        )
    }
}

export default AdminSideBarItem
