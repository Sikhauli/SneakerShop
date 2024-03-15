import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Badge } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import { PiSneakerLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 1}}
            exit={{ opacity: 0, y: -50 }}
        >
            <Navbar
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",
                    ],
                }}
            >
                <NavbarBrand>
                    <PiSneakerLight />
                    <p className="font-bold text-inherit text-blue-700 mx-2">
                        Sneaker<span className="text-purple-500">Freak</span>
                    </p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">             
                    <Input
                        classNames={{
                            base: " h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 ",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<IoIosSearch size={18} />}
                        type="search"
                        className=" rounded"
                    />
                    <select className="h-9 w-30 px-2 rounded">
                        <option value="all" className="text-white">
                            All
                        </option>
                        <option value="all">Mens</option>
                        <option value="all">Womens</option>
                        <option value="all">Winter</option>
                        <option value="all">Summer</option>
                    </select> 
                </NavbarContent>
               
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link to="/login" className="item">
                            <div className="group cursor-pointer" >
                                <i className="material-icons mx-2 " >
                                    <FiUser />
                                </i>
                                <div className="detail">Account</div>
                            </div>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/cart" className="item">
                            <div className="group cursor-pointer">
                                <i className="material-icons mx-2">
                                    <Badge content="4" shape="circle" color="danger" >
                                    <IoCartOutline />
                                    </Badge>
                                </i>
                                <div className="detail">Cart</div>
                            </div>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </motion.div>
    );
}