import React from "react";
import FtcLogoHeader from "../../assets/svg/FtcLogoHeader";
import { StoreContext } from "../../../store/StoreContext";
import ModalSuccess from "./modal/ModalSuccess";
import ModalError from "./modal/ModalError";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);


  return (
    <>
      <div className="sticky top-0 z-20 flex items-center justify-between h-16 border-solid border-b-2 border-black bg-white px-2">
        <div>
          <FtcLogoHeader />
        </div>

        <div>
          <div className="rounded-full bg-[#3E9BD0] h-8 w-8 flex items-center justify-center text-white">
            <span className="block">R</span>
            <span className="block">D</span>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Header;
