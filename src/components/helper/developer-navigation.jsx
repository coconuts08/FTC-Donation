import { FaCogs, FaHandHoldingHeart, FaList } from "react-icons/fa";

export const developernNavigation = [
    {
        name: "Donor",
        code: "donor",
        link: "/donor",
        icon: <FaHandHoldingHeart/>,
    },
    {
        name: "Children-list",
        code: "Children-list",
        link: "/childrenlist",
        icon: <FaHandHoldingHeart/>,
    },
    {
        name: "Reports",
        code: "reports",
        link: "/reports",
        icon: <FaList/>,
        isDropDown: true,
        subMenu:[
            {
                name: "donation",
                code: "donation",
                link: "/donation",
               
            }
        ]   
    },
    {
        name: "Settings",
        code: "settings",
        link: "/settings",
        icon:<FaCogs/>,
        isDropDown: true,
        subMenu:[
            {
                name: "user",
                code: "user",
                link: "/user",
               
            },
            {
                name: "general",
                code: "general",
                link: "/general",
               
            },
            {
                name: "category",
                code: "category",
                link: "/category",
               
            },
            {
                name: "Designation",
                code: "designation",
                link: "/designation",
               
            },
            {
                name: "Notification",
                code: "notification",
                link: "/notification",
               
            },
            {
                name: "Maintenance",
                code: "maintenance",
                link: "/maintenance",
               
            },
        ]
    }
];