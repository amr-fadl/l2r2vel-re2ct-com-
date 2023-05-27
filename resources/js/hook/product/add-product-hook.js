import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/actions/productAction';
import notify from '../useNotifaction';
import { getAllCategory } from './../../redux/actions/categoryAction';
import { getAllBrand } from './../../redux/actions/brandAction';

function addProductHook() {

    // Multi images
    const [images,setImages] = useState([]);

    // values state
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState('');
    const [discount,setDiscount] = useState('');
    const [qty,setQty] = useState('');
    const [cat,setCat] = useState();
    const [subCat,setSubCat] = useState([]);
    const [subCatOption,setSubCatOption] = useState([]);
    const [brandId,setBrandId] = useState('');
    const [colors,setColors] = useState([]);
    const [showColor,setShowColor] = useState(false);


    // get all data
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCategory()) // all category
        dispatch(getAllBrand()) // all brand
    },[])
    const category = useSelector(state => state.allCategory.category) // get category from redux
    const brand = useSelector(state => state.allBrand.brand) // get brand from redux

    // select category
    const onChangeCat = (e) => {
        setCat(e.target.value) // set category
        setSubCatOption(category?.data?.filter(cat => cat.parent_cat_id == e.target.value)) // set sub category
    }

    // multi select
    const onSelect = (e) => {
        setSubCat(e)
    }
    const onRemove = (e) => {
        setSubCat(e)
    }

    // handel color Change
    const colorChange = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor) // show or hide color picker
    }
    // remove color in array
    const removeColor = (color) => {
        const newColor = colors.filter(e => e !== color)
        setColors(newColor)
    }

    // to save data
    const handelSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('name',name)
        formData.append('desc',desc)
        formData.append('price',price)
        formData.append('discount',discount)
        formData.append('qty',qty)
        formData.append('category',cat)
        formData.append('brand',brandId)


        images.forEach(e => {
            formData.append(`images[]`, e);
        });
        console.log(images);

        subCat.forEach(e => {
            formData.append(`sub_cat[]`, e.id);
        });

        colors.forEach(e => {
            formData.append(`colors[]`, e);
        });

        await dispatch(createProduct(formData));
        notify("تم إضافة المنتج بنجاح", "success");

    }

    // validation
    const [errors, setErrors] = useState({});
    const validate = () => {
        let errors = {};
        let isValid = true;

        if (images.length < 3) {
            errors.images = 'يجب تحميل 3 صور على الأقل';
            isValid = false;
        }

        if (!name) {
            errors.name = 'يرجى إدخال اسم المنتج';
            isValid = false;
        }

        if (!desc) {
            errors.desc = 'يرجى إدخال وصف المنتج';
            isValid = false;
        }

        if (!price) {
            errors.price = 'يرجى إدخال سعر المنتج';
            isValid = false;
        }

        if (!discount) {
            errors.discount = 'يرجى إدخال خصم المنتج';
            isValid = false;
        }

        if (!qty) {
            errors.qty = 'يرجى إدخال الكمية';
            isValid = false;
        }

        if (!cat) {
            errors.cat = 'يرجى اختيار التصنيف';
            isValid = false;
        }

        if (!brandId) {
            errors.brandId = 'يرجى اختيار الماركة';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return [
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
    ]

}

export default addProductHook
