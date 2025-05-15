import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../Navigation";
import BreadCrumbs from "../../../../partials/BreadCrumbs";
import Footer from "../../../../partials/Footer";
import { FaPlus } from "react-icons/fa";
import SettingsCategoryList from "./SettingsCategoryList";
import ModalAddSettingsCategory from "./ModalAddSettingsCategory";

const SettingsCategory = () => {
  const [isModalCategory, setIsModalCategory] = React.useState(false); //INITIAL VALUE

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalCategory(true);
  };

  
  return (
    <>
      <Header />
      <Navigation menu="settings" subMenu="category" />
      <div className="wrapper">
        {/* BREADCRUMBS OR ADD BUTTON */}
        <div className="flex items-center justify-between">
          <BreadCrumbs />
          <button
            type="button"
            className="flex items-center gap-x-3 text-primary hover:underline text-sm"
            onClick={handleAdd}
          >
            <FaPlus />
            <span>Add</span>
          </button>
        </div>

        {/* ADD CONTENT  */}
        <div className="pb-8">
          <h2>Category</h2>
          <div className="pt-3">
            <SettingsCategoryList
              setItemEdit={setItemEdit}
              setIsModal={setIsModalCategory}
            />
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>

      {isModalCategory && (
        <ModalAddSettingsCategory
          itemEdit={itemEdit}
          setIsModal={setIsModalCategory}
        />
      )}
    </>
  );
};

export default SettingsCategory;
