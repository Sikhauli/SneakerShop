import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Badge, Button } from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import { PiSneakerLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { IoCartOutline, IoMenuSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Nav({ currentUser, onAddSneaker }) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const linkDestination = currentUser ? (currentUser.userType === 'ADMIN' ? '/admin' : '/account') : '/login';
    const linkText = currentUser ? currentUser?.name : 'Account';

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                    <p className="font-bold font-serif text-inherit text-blue-700 mx-2">
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
                            font: "serif",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<IoIosSearch size={18} />}
                        type="search"
                        className=" rounded"
                    />
                    <select className="h-9 w-30 px-2 rounded">
                        <option value="all" className="text-white font-serif">
                            All
                        </option>
                        <option value="all" className="font-serif">Mens</option>
                        <option value="all" className="font-serif">Womens</option>
                        <option value="all" className="font-serif">Winter</option>
                        <option value="all" className="font-serif">Summer</option>
                    </select> 
                </NavbarContent>
               
                <NavbarContent className="hidden sm:flex gap-4 w-full" justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link to={linkDestination} className="item">
                            <div className="group cursor-pointer">
                                <i className="material-icons mx-2">
                                    <FiUser />
                                </i>
                                <div className="detail font-serif">{linkText}</div>
                            </div>
                        </Link>
                    </NavbarItem>
                    {currentUser?.userType === 'ADMIN' ? (
                        <></>
                    ) : (
                        <NavbarItem>
                            <Link to="/cart" className="item">
                                <div className="group cursor-pointer">
                                    <i className="material-icons mx-2">
                                        <Badge content="4" shape="circle" color="danger">
                                            <IoCartOutline />
                                        </Badge>
                                    </i>
                                    <div className="detail font-serif">Cart</div>
                                </div>
                            </Link>
                        </NavbarItem>
                    )}
                </NavbarContent>
                <NavbarItem className="sm:hidden">
                    <Button
                        color="white"
                        flat
                        onClick={toggleMobileMenu}
                    >
                        <IoMenuSharp size={24} />
                    </Button>
                </NavbarItem>
                {isMobileMenuOpen && (
                    <div className="mobile-menu-container">
                        <div className="mobile-menu">
                            <Link to="/" className="mobile-menu-item" onClick={toggleMobileMenu}>
                                Home
                            </Link>
                            <Link to="/about" className="mobile-menu-item" onClick={toggleMobileMenu}>
                                About
                            </Link>
                            <Link to="/contact" className="mobile-menu-item" onClick={toggleMobileMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}   
            </Navbar>
        </motion.div>
    );
}