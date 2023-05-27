import React,{useState} from 'react';
import avatar from '../../images/avatar.png'
import { useEffect } from 'react';

function AdminUploadImg({srcImage}) {

    function showImage(event) {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]))
            srcImage?.(event.target.files[0])
        }
    }

    const [image,setImage] = useState(avatar);

    return (
        <div>
            <label htmlFor="upload-photo" style={{cursor:'pointer'}}>
                <img src={image} alt="" height="150px" width="150px" style={{objectFit:'contain'}}/>
            </label>
            <input
                id='upload-photo'
                onChange={showImage}
                type="file"
                className="input-form d-none mt-3 px-3 py-1"
                placeholder="اسم التصنيف"
            />
        </div>
    )
}

export {AdminUploadImg}
