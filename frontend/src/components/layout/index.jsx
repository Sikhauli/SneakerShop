import React from 'react';
import { Card } from "@nextui-org/react";
import { GiNetworkBars } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { SiProcessingfoundation } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import Overview from "../overview/index"
import Customers from "../customers/index"
import Users from "../users/index"
import Settings from "../settings/index"
import Product from "../product/index"
import Orders from "../adminOrders/index"
import Review from "../adminReview/index"

function Layout({ selectedCategory, onSelectCategory }) {

    const layout_items = [
        {
            name: "Overview",
            avatar: <GiNetworkBars />,
            component: <Overview />,
        },
        {
            name: "Customers",
            avatar: <HiUsers />,
            component: <Customers />,
        },
        {
            name: "Users",
            avatar: <FiUsers />,
            component: <Users />,
        },
        {
            name: "Settings",
            avatar: <IoSettings />,
            component: <Settings />,
        },
        {
            name: "Product",
            avatar: <SiProcessingfoundation />,
            component: <Product />,
        },
        {
            name: "Orders",
            avatar: <FaMoneyBillTrendUp />,
            component: <Orders />,
        },
        {
            name: "Review",
            avatar: <MdRateReview />,
            component: <Review />,
        },
    ];

    console.log("selectedCategory inside Layout :", selectedCategory)

    return (
        <div className='flex flex-col p-8'>
            <Card className='p-4 flex-row mb-8 bg-transparent'>
                <p className="font-bold font-serif text-inherit mx-2">
                    Sneaker<span className="text-purple-500">Freak</span> 
                </p>
            </Card>
                <div className='flex flex-col items-center '>
                    {layout_items.map((item, index) => (
                        <div key={index} onClick={() => onSelectCategory(item.name, item.component)} className='w-full'>
                            <Card
                                className={`flex p-3 rounded w-[120%] mb-2 pointer-cursor ${selectedCategory === item.name ? '' : 'bg-transparent'}`}
                            >
                                <div className="flex gap-4">
                                    <div className='mt-1'>{item.avatar}</div>
                                    {item.name}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Layout;
