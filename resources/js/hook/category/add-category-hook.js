import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createCategory } from '../../redux/actions/categoryAction'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'
import avatar from '../../images/avatar.png'

const AddCategoryHook = () => {

    // Use the useDispatch hook to send actions to the Redux store
    const dispatch = useDispatch();

    // Use local state to manage the uploaded image, category name, and parent category ID
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [parentCatId, setParentCatId] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
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
    }

    // Function to update the uploaded image state when an image is uploaded
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    // Use local state to access the category state stored in the Redux store
    const res = useSelector(state => state.allCategory.category)

    // Function to send the new category data to the database
    const handelSubmit = async (event) => {
        event.preventDefault();

        // Check for required data input
        if (name === "" || selectedFile === null) {
            console.log('من فضلك أكمل البيانات')
            notify('من فضلك أكمل البيانات', "warn");
            return;
        }

        // Create a FormData object to send the data
        const formData = new FormData();
        formData.append("name", name)
        formData.append("image", selectedFile)
        formData.append("parent_cat_id", parentCatId)

        // Update the local state to show the loading icon
        setLoading(true)
        setIsPress(true)

        // Send the data to the Redux store using the createCategory action
        await dispatch(createCategory(formData))

        // Update the local state to hide the loading icon
        setLoading(false)
    }

    // Use the useEffect hook to update the local state after adding a new category
    useEffect(() => {
        if (!loading) {
            // Reset the local state after adding a new category
            setImg(avatar)
            setName("")
            setSelectedFile(null)

            // Show an alert message based on the category state stored in the Redux store
            if (res.status === 201 || res.status === 200) {
                notify('تمت إضافة الفئة بنجاح', "success");
            }
            else {
                notify('حدث خطأ أثناء إضافة الفئة', "error");
            }
        }
    }, [loading])

    return [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName, onChangeParentCatId]
};

export default AddCategoryHook
