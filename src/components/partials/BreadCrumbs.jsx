import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BreadCrumbs = ({ param = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((item) => item !== "")
    .map((item, key) => {
        currentLink += `/${item}`;
      return (
        <li
          className={` text-primary after:mr-2 after:content-['>'] last:after:hidden last:text-black last:pointer-event-none ${
            (item === "settings" || item === "reports") && "pointer-event-none"
          }`}
          key={key}
        >
            <Link to={`${item === "settings" || item === "reports" ? "" : `${currentLink}${param}`

            }`} className="mr-2 hover:text-primary">{item.replace("-"," ")}</Link>
        </li>
      );
    });

  return (
    <div>
      
      <ul className=" flex items-center cursor-pointer text-[10px] gap-1"><button type="button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="h-4 w-4" />
      </button>{crumbs.length === 1 ? "" : crumbs}</ul>
    </div>
  );
};

export default BreadCrumbs;