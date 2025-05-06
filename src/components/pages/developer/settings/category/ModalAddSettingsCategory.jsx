import React from 'react'
import ModalWrapper from '../../../../partials/modal/ModalWrapper';
import { FaRegTimesCircle } from 'react-icons/fa';

const ModalAddSettingsCategory = (setIsModal) => {
    const[animate, setAnimate] = React.useState("translate-x-full");
    const handleClose =() => {
        setAnimate("translate-x-full");
        setTimeout(() =>{
            setIsModal(false);
        },200)
        
    };
  return (
    <>
    <ModalWrapper>
        <div className='relative mb-4 modal__header'>
            <h3>{itemEdit ? "Update" : "Add"}Category</h3>
            <button type='button' className='absolute top-0 right-0'>
                <FaRegTimesCircle className='text-lg'/>
            </button>
        </div>
    </ModalWrapper>
    
    </>
  )
}

export default ModalAddSettingsCategory