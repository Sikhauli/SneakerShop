import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, Link, CardHeader, Image, Divider, CardFooter, Input } from "@nextui-org/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import MyPersonalComponent from "../../components/account/index"
import MyOrderComponent from "../../components/order/index"
import MyInvoiceComponent from "../../components/invoice/index"
import MyReturnsComponent from "../../components/return/index"
import MyReviewComponent from "../../components/review/index"
import MyCredidComponent from "../../components/credit/index"
import MyVoucherComponent from "../../components/voucher/index"
import MyAddressComponent from "../../components/address/index"
import MyNewsLetterComponent from "../../components/newsletter/index"
import MyListComponent from "../../components/list/index"
import MyCreateComponent from "../../components/create/index"

function Account() {

    const [activeComponent, setActiveComponent] = React.useState(<MyPersonalComponent/>);

    // Function to set the active component
    const handleClick = (component) => {
        setActiveComponent(component);
    };

  return (
    <Card className="rounded p-8 w-screen">
         <Card className='px-8 py-4 rounded p-2 my-4 w-fit'>
                <Breadcrumbs>
                    <BreadcrumbItem href="#home">Home</BreadcrumbItem>
                    <BreadcrumbItem href="#cart" current>Account</BreadcrumbItem>
                </Breadcrumbs>
        </Card>
        <div className='flex flex-row rounded gap-4'>
            <Card className='w-3/12 h-fit rounded'>
          <h3 className='bold text-xl p-2 mb-6 font-serif border-b'>My Account</h3>
                <div className='mb-4'>
            <h4 className='bold text-xl p-2 flex font-serif gap-4'><MdOutlineShoppingCart className='mt-1  rounded-xl' /> Orders</h4> 
                    <ul className='ml-11'>
              <li className='hover:bg-gray-950 font-serif hover:underline cursor-pointer p-1'
                          onClick={() => handleClick(<MyOrderComponent />)}
                        >Orders</li>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyInvoiceComponent />)}
                        >Invoices</li>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyReturnsComponent />)}
                        >Returns</li>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyReviewComponent />)}
                        >Product Reviews</li>
                    </ul> 
                </div>
                  <Divider className="my-4" />
                <div className='mb-4'>
            <h4 className='bold text-xl p-2 flex font-serif gap-4 '><IoCardOutline className='mt-1  rounded-xl' /> Payments & Credit</h4>
                      <ul className='ml-11'>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyCredidComponent />)}
                          >Credit & Refunds</li>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyVoucherComponent />)}
                          >Redeem Gift Voucher</li>
                      </ul> 
                </div>
                  <Divider className="my-4" />
                <div className='mb-4'>
            <h4 className='bold text-xl p-2 font-serif flex gap-4'><FiUser className='mt-1  rounded-xl' /> Customer Information</h4>
                      <ul className='ml-11'>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyPersonalComponent />)}
                          >Personal Details</li>
              <li className='hover:bg-gray-950 font-serif p-1 hover:underline cursor-pointer'
                                        onClick={() => handleClick(<MyAddressComponent />)}
                          >Address Book</li>
              <li className='hover:bg-gray-950 p-1 font-serif hover:underline cursor-pointer'
                                         onClick={() => handleClick(<MyNewsLetterComponent />)}
                          >Newsletter Subscription</li>
                      </ul> 
                </div>
                  <Divider className="my-4" />
                <div className='mb-4'>
            <h4 className='bold text-xl p-2 font-serif flex gap-4'><FaRegHeart className='mt-1 rounded-xl' /> My Lists</h4>
                      <ul className='ml-11'>
              <li className='hover:bg-gray-950 p-1 font-serif hover:underline cursor-pointer'
                                         onClick={() => handleClick(<MyListComponent />)}
                          >My List</li>
              <li className='hover:bg-gray-950 p-1 hover:underline font-serif cursor-pointer'
                                        onClick={() => handleClick(<MyCreateComponent />)}                 
                          >+ Create a List</li>
                      </ul> 
                </div>
            </Card >
            <div className="rounded w-[60%]">
                  {activeComponent}
            </div>
        </div>
    </Card>
     
  )
}

export default Account