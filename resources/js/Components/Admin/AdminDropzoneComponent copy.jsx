import React, { useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import avatar from '../../images/avatar.png'

const DropzoneComponent = ({ setImages,images,changeImages }) => {
  const filesRef = useRef([]);
  const defaultImage = avatar;

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
    }));
    filesRef.current = [...filesRef.current, ...newFiles];
    setImages(filesRef.current.map((file) => file.file));
    changeImages()
  }, [setImages]);

  const removeFile = (id) => {
    filesRef.current = filesRef.current.filter((file) => file.id !== id);
    setImages(filesRef.current.map((file) => file.file));
    changeImages()
  };

  const { getRootProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
        <div className='d-flex flex-wrap' style={{gap:'5px'}}>
            {
                filesRef.current.length > 0 ? filesRef.current.map(({ file, id }) =>
                    <div key={id} style={{ position: 'relative'}}>
                        <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <button
                            onClick={() => removeFile(id)}
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                background: 'none',
                                border: 'none',
                                color: '#68686869',
                                cursor: 'pointer',
                            }}
                        >
                            X
                        </button>
                    </div>
                )
                :
                images?.map((file, id) =>
                    <div key={id} style={{ position: 'relative'}}>
                        <img
                            src={'../../images/product/'+file}
                            alt={file.name}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <button
                            onClick={() => removeFile(id)}
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                background: 'none',
                                border: 'none',
                                color: '#68686869',
                                cursor: 'pointer',
                            }}
                        >
                            X
                        </button>
                    </div>
                )
            }
            <img
                {...getRootProps()}
                src={defaultImage}
                alt="Default Image"
                style={{
                    width: filesRef.current.length > 0 ? '100px' :'150px',
                    paddingRight: filesRef.current.length > 0 && '15px',
                    // height: '150px',
                    objectFit: 'contain',
                    cursor: 'pointer',
                }}
            />
        </div>

    </div>
  );
};

export default DropzoneComponent;
