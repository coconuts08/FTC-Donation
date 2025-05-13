import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { developerNavigation } from "../../helper/developer-navigation";
import { PiCaretDown } from "react-icons/pi";

const Navigation = ({ menu = "", subMenu = "" }) => {
  const [isReports, setIsReports] = React.useState(false);
  const [isSettings, setIsSettings] = React.useState(false);
  //   const array = [];
  //   const object = {};
  //   const integerValue = 23;
  //   const varCharValue = "23";
  //   const booleanValue = true || false;

  return (
    <>
      <nav className="fixed overflow-y-auto w-[12rem] uppercase pt-3 bg-primary h-dvh">
        <div className="text-sm text-white flex flex-col justify-between h-full ">
          <ul>
            {developerNavigation.map((item, index) => {
              console.log(item.name);
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (item.code === "reports") setIsReports(!isReports);
                    if (item.code === "settings") setIsSettings(!isSettings);
                  }}
                >
                  <Link
                    to={item.isDropDown ? "" : item.link}
                    className={`w-full flex items-center px-2 py-1 justify-between gap-x-5 ${
                      item.code === menu ? "bg-white/20" : "hover:bg-white/10"
                    }`}
                  >
                    <span className="flex items-center gap-x-5">
                      {item.icon}
                      {item.name}
                    </span>
                    {item.isDropDown && (
                      <span>
                        <PiCaretDown
                          className={`transition-all ease-linear duration-200 ${
                            item.code === "reports" && isReports && "rotate-180"
                          }
                        ${
                          item.code === "settings" && isSettings && "rotate-180"
                        }`}
                        />
                      </span>
                    )}
                  </Link>
                  {item.isDropDown && (
                    <ul className="bg-primary">
                      {((item.code === "reports" && isReports) ||
                        (item.code === "settings" && isSettings)) && (
                        <>
                          {item.subMenu.map((subItem) => {
                            return (
                              <li className="hover:bg-white/5 cursor-pointer pl-10 my-0.5">
                                <Link
                                  to={subItem.link}
                                  className={`border-l-2 pl-3 border-transparent hover:border-accent ${
                                    subMenu === subItem.code
                                      ? "border-accent text-accent"
                                      : ""
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            );
                          })}
                        </>
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
