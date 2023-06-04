import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory, updateCategory } from '../../redux/actions/categoryAction'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'
import { useParams } from 'react-router-dom';

const EditCategoryHook = () => {

    const {id} = useParams()

    // Use the useDispatch hook to send actions to the Redux store
    const dispatch = useDispatch();

    // Use local state to manage the uploaded image, category name, and parent category ID
    const [img, setImg] = useState('')
    const [data, setData] = useState([])
    const [imgselected, setImgselected] = useState('')
    const [name, setName] = useState('')
    const [parentCatId, setParentCatId] = useState('')
    const [selectedFile, setSelectedFile] = useState()
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    // Function to update the name state when it changes
    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    // Function to update the parent category ID state when it changes
    const onChangeParentCatId = (event) => {
        event.persist();
        setParentCatId(event.target.value)
        setSelectedFile(event.target.value)
    }

    // Function to update the uploaded image state when an image is uploaded
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setImgselected(event.target.files[0])
        }
    }

    const category = useSelector(state => state.allCategory.category)

    // Function to send the new category data to the database
    const handelSubmit = async (event) => {
        event.preventDefault();

        // Check for required data input
        if (name === "") {
            console.log('من فضلك أكمل البيانات')
            notify('من فضلك أكمل البيانات', "warn");
            return;
        }

        // Create a FormData object to send the data
        const formData = new FormData();

        formData.append("name", name)
        formData.append("image", imgselected)
        formData.append("parent_cat_id", parentCatId)

        // Update the local state to show the loading icon
        setLoading(true)
        setIsPress(true)

        // Send the data to the Redux store using the createCategory action
        const response = await dispatch(updateCategory(id,formData))
        if (response&&response.statusText == "OK") {
            notify("تم تعديل المنتج بنجاح", "success");
        }else{
            notify("لم يتم التعديل هناك مشكلة", "error");
        }
        // Update the local state to hide the loading icon
        setLoading(false)
    }

    // Use the useEffect hook to update the local state after adding a new category
    useEffect(() => {
        dispatch(getAllCategory())
    }, [loading])

    // start filter category
    useEffect(() => {
        if (category&&category.data&&category.data.length > 0) {
            setData(category.data.filter(item => item.id == id)[0])
        }
    }, [category])
    useEffect(() => {
        setName(data.name)
        setImg(data.image)
        if (data.parent) {
            setSelectedFile(data.parent.id)
        }
    }, [data])

    return [img,name,selectedFile,loading,isPress,handelSubmit,onImageChange, onChangeName, onChangeParentCatId,category]
};

export default EditCategoryHook
