import React from 'react'
import Header from '../../../../partials/Header'
import Navigation from '../../Navigation'
import Footer from '../../../../partials/Footer'
import BreadCrumbs from '../../../../partials/BreadCrumbs'
import { FaPlus } from 'react-icons/fa'
import SettingsCategoryList from './SettingsCategoryList'
import ModalAddSettingsCategory from './ModalAddSettingsCategory'

const SettingsCategory = () => {
  const [isModalCategory , setIsModalCategory] = React.useState(false);

  const [itemEdit, setItemEdit] = React.useState(null);
  console.log(isModalCategory);
  return (
    <>
    <Header/>
    <Navigation menu="settings" subMenu='/category'/>
    <div className='wrapper'>
      {/*breadcrumbs */}
      <div className='flex items-center justify-between'>
    <BreadCrumbs/>

    <button type='button' className='flex items-center gap-x-3 text-primary hover:underline text-sm' onClick={()=> setIsModalCategory(true)}>
      <FaPlus/>
      <span>add</span>
    </button>

      </div>
       {/*content */}
      <div className='pb-8'>
        <h2 className='text-base'>Category</h2>
        <div className='pt-3'>
        <SettingsCategoryList/>
        </div>
      </div>

 {/*footer */}
 <Footer/>

    </div>
    {isModalCategory && <ModalAddSettingsCategory itemEdit = {itemEdit} setIsModal={setIsModalCategory}  />}
    </>
  )
}

export default SettingsCategory