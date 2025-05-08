import React from "react";
import FtcLogoHeader from "../../assets/svg/FtcLogoHeader";
import { StoreContext } from "../../../store/StoreContext";
import ModalSuccess from "./modal/ModalSuccess";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  console.log(store.message, store.error, store.success);
  return (
    <>
      <div className="flex items-center justify-between h-16 border-solid border-b-2 border-black px-2">
        <div>
          <FtcLogoHeader />
        </div>
        <div>
          <div className="rounded-full bg-primary flex items-center justify-center min-h-[2rem] h-[2rem] w-[2rem] text-white pt-px">
            <span className="block">R</span>
            <span className="block">D</span>
          </div>
        </div>
      </div>
      {store.success && <ModalSuccess />}
    </>
  );
};

export default Header;
