import { FaCogs, FaHandHoldingHeart, FaList } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

export const developerNavigation = [
  {
    name: "Donor",
    code: "donor",
    link: "/donor",
    icon: <FaHandHoldingHeart />,
  },

  {
    name: "Children List",
    code: "children-list",
    link: "/settings/children-list",
    icon: <FaChildren />,
  },

  {
    name: "Reports",
    code: "reports",
    link: "/settings/reports",
    icon: <FaList />,
    isDropDown: true,
    subMenu: [
      {
        name: "donation",
        link: "/settings/donation",
      },
    ],
  },
  {
    name: "settings",
    code: "settings",
    icon: <FaCogs />,
    isDropDown: true,
    subMenu: [
      {
        name: "users",
        code: "users",
        link: "/settings/users",
      },

      {
        name: "general",
        code: "general",
        link: "/settings/general",
      },

      {
        name: "category",
        code: "category",
        link: "/settings/category",
      },

      {
        name: "designation",
        code: "designation",
        link: "/settings/designation",
      },

      {
        name: "notfication",
        code: "notfication",
        link: "/settings/notification",
      },

      {
        name: "maintenance",
        code: "maintenance",
        link: "/settings/maintenance",
      },
    ],
  },
];
