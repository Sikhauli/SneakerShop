import React, { useState } from 'react'
import { Checkbox, Link, User, Chip, cn, Card, CardBody, Button, CardHeader, Breadcrumbs, BreadcrumbItem, CardFooter } from "@nextui-org/react";
import CustomCheckbox from "../../components/checkbox/index"
import { HiOutlineBuildingLibrary, HiOutlineCreditCard } from "react-icons/hi2";
import { LiaCcVisa } from "react-icons/lia";
import { SiMastercard } from "react-icons/si";
import { CiEdit } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";


function Payment() {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
    const [balance, setBalance] = useState(0);
    const [expiresDate, setExpiresDate] = useState("28/08");

    const handleCheckboxChange = (id) => {
        setSelectedCheckboxes(prevState => ({
            ...prevState,
            [id]: !prevState[id], 
        }));
    };

    const Available_Credits = [
        {
            name: "Available balance",
            avatar: <HiOutlineBuildingLibrary />,
            username: `Available : ${balance}`,
        }
    ];


    const Credits_Cards = [
        {
            name: "*********1324",
            avatar: <LiaCcVisa />,
            username: < div className='flex gap-2'><p className='text-xs font-serif'>sikhauli vhuthuhawe</p> <p className='text-xs font-serif'>Expires: {expiresDate}</p> </div>,
            url: "https://twitter.com/sikhaulivhuthu",
            role: <Button className='bg-transparent rounded font-serif'><div className='flex gap-1'><CiEdit size={18} /> Edit</div></Button>,
            status: "Active",
        },
        {
            name: "*********5524",
            avatar: <SiMastercard />,
            username: < div className='flex gap-2'><p className='text-xs font-serif'>sikhauli vhuthuhawe</p> <p className='text-xs font-serif'>Expires: {expiresDate}</p> </div>,
            url: "https://twitter.com/sikhaulivhuthu",
            role: <Button className='bg-transparent rounded font-serif'><div className='flex gap-1'><CiEdit size={18} /> Edit</div></Button>,
            status: "Offline",
        }
    ];

    
    const Create_Cards = [
       
        {
            name: <div className="text-xl font-bold font-serif">Add a new card</div>,
            url: "https://twitter.com/sikhaulivhuthu",
            status: "online",
        },
    ];




    const Addresses = [
        {
            "residentialAddress": {
                "area": "123 Main Street",
                "street": "Anytown",
                "suburb": "Suburbia",
                "city": "Metropolis",
                "postalCode": "12345"
            },
            "contactInformation": {
                "name": "John Doe",
                "phoneNumber": "+1234567890"
            }
        },
        {
            "residentialAddress": {
                "area": "123 Main Street",
                "street": "Anytown",
                "suburb": "Suburbia",
                "city": "Metropolis",
                "postalCode": "12345"
            },
            "contactInformation": {
                "name": "John Doe",
                "phoneNumber": "+1234567890"
            }
        }

    ];


    const Add_Address = [

        {
            name: <div className="text-xl font-serif text-center cursor-pointer">Add & Use New Address</div>,
        },
    ];




  return (
    <div className='p-12'>
        <Card className='rounded p-2 m-4  w-fit'>
            <Breadcrumbs>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/cart" current>Cart</BreadcrumbItem>
                <BreadcrumbItem href="#" current>Payment Method</BreadcrumbItem>
            </Breadcrumbs>
        </Card>
        <div className='w-[100%] h-fit p-12 flex'>
            <div className='flex-1 justify-center align-center p-6 h-fit'> 
                <div className='flex justify-between mb-8 w-[80%] '>
                    <p className='font-serif bold text-2xl'>Payment Method</p>
                </div>
                <p className='font-serif py-1'>Your Available Credit</p>
                {Available_Credits.map((user, index) => (
                    <CustomCheckbox
                        key={index}
                        id={index}
                        user={user}
                        isSelected={selectedCheckboxes[index]}
                        setIsSelected={handleCheckboxChange}
                    /> 
                ))}

                  <p className='font-serif py-1 mt-8'>Your Credit Cards</p>
                  {Credits_Cards.map((user, index) => (
                      <CustomCheckbox
                          key={index}
                          id={index}
                          user={user}
                          isSelected={selectedCheckboxes[index]}
                          setIsSelected={handleCheckboxChange}
                      />
                  ))}
                  
                  {Create_Cards.map((user, index) => (
                      <CustomCheckbox
                          key={index}
                          id={index}
                          user={user}
                          isSelected={selectedCheckboxes[index]}
                          setIsSelected={handleCheckboxChange}
                      />
                  ))}
                  <div className='flex py-12 justify-between w-[80%]'>
                    <Button variant="bordered" className='rounded bg-transparent mr-5 px-8'>Place my order</Button>
                    <p className='border-b font-serif mt-2 text-xl cursor-pointer'>Continue Shopping</p>
                </div>
            </div>
            
            <div className='flex-1 border-l  px-12 '>
                  <div className='flex justify-between mb-12 py-5 '>
                      <p className='font-serif bold text-2xl'>Choose or Add Your Delivery Address</p>
                  </div>
                <div>
                    {Addresses.map((address, index) => (
                        <Card key={index} className='flex p-6 rounded w-[120%] mb-2'>
                            <div className="flex justify-between w-full">
                                <div>
                                    <p className=' font-serif py-2 '>{address.residentialAddress.area}</p>
                                    <p className=' font-serif '>{address.residentialAddress.street}</p>
                                    <p className=' font-serif py-2 '>{address.residentialAddress.suburb}, {address.residentialAddress.city}, {address.residentialAddress.postalCode}</p>
                                    <div className='flex flex-row gap-8'>
                                        <p className='text-xs font-serif '>{address.contactInformation.name}</p>
                                        <p className='text-xs font-serif '>{address.contactInformation.phoneNumber}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                    
                      {Add_Address.map((address, index) => (
                          <Card key={index} className='flex p-6 rounded w-[120%] mb-2 cursor-pointer hover:bg-gray-950'>
                              <div className="flex justify-center w-full items-center  ">
                                  <div className='items-center flex justify-between gap-5'>
                                      <MdAddHomeWork size={32}/>
                                      <p>{address.name}</p>
                                  </div>
                              </div>
                          </Card>
                      ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment