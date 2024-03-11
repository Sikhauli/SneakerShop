import React, { useState } from 'react';
import { Card, CardBody, Button, Link, CardHeader, Image, Divider, CardFooter, Input } from "@nextui-org/react";
import { IoMdArrowDropright, IoMdArrowDropleft  } from "react-icons/io";
import { IoEnterOutline } from "react-icons/io5";
import { HiArrowSmallLeft } from "react-icons/hi2";
import sneakersData from "../../assets/cartJson.json"

function Cart() {

    const [counts, setCounts] = useState({});

    const incrementCount = (itemId) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1
        }));
    };

    const decrementCount = (itemId) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) - 1
        }));
    };

    const subtotal = Object.keys(counts).reduce((acc, itemId) => {
        const item = sneakersData[itemId];
        const count = counts[itemId] || 0;
        return acc + (parseFloat(item.price.replace('$', '')) * count);
    }, 0);

    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    const deliveryFee = total > 1000 ? 0 : 150;


    return (
        <>
            <Card className='px-4'>
                <CardHeader className='w-screen flex align-center justify-center'><span className='text-3xl bold'>Shopping Cart</span></CardHeader>
                <CardBody className='rounded'>
                    <div className="w-full max-w-screen-xl mx-auto">
                        <div className="w-full my-8 pr-8">
                            <ul className="grid grid-cols-12 gap-4">
                                <li className="col-span-6">Product</li>
                                <li className="col-span-2">Quantity</li>
                                <li className="col-span-2">Remove</li>
                                <li className="col-span-2">Total</li>
                            </ul>
                            <Divider className="my-4" />
                        </div>
                        
                    </div>

                    {sneakersData.map((sneaker, index) => (
                        <div key={index} className='grid grid-cols-12 gap-4 mt-8 flex align-center justify-between border-b w-[98%]'>
                            <div className='col-span-6 flex pr-8'>
                                <Image
                                    width={150}
                                    alt={sneaker.name}
                                    src={sneaker.image}
                                    className='rounded'
                                />
                                <div className='flex flex-col justify-center align-center ml-6'>
                                    <h3 className='text-xl font-bold'>{sneaker.name}</h3>
                                    <p className='text-xs'>Color: <span className='font-bold text-gray-300'>{sneaker.color}</span> </p>
                                    <p className='text-xs'>Delivery Time: <span className='font-bold text-gray-300'>{sneaker.delivery_time}</span> </p>
                                    <p className='text-xs'>Estimated cost: <span className='font-bold text-gray-300'>{sneaker.price}</span> </p>
                                </div>
                            </div>
                            <div className='col-span-2 mt-8'>
                                <div className='border flex w-fit'>
                                    <div className='p-2 mt-1' onClick={() => decrementCount(index)}>
                                        <IoMdArrowDropleft />
                                    </div>
                                    <span className='p-2'>{counts[index] || 0}</span>
                                    <div className='p-2 mt-1' onClick={() => incrementCount(index)}>
                                        <IoMdArrowDropright />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 mt-9'>
                                <span className='text-red-700 text-xs cursor-pointer'>Remove</span>
                            </div>
                            <div className='col-span-2 mt-10'>
                                <p> R {sneaker.price} </p>
                            </div>
                        </div>
                          
                    ))}
    
                    <Divider className="my-4 w-[98%]" />
                </CardBody>
                <CardFooter className='pr-10 flex flex-col'>
                    <div className='flex justify-between w-full'>
                        <div className='flex justify-between border p-2 w-[20%]'>
                            <p>Discount</p>
                            <p>00</p>
                        </div>
                        
                        <div className='flex justify-between border p-2 w-[20%]'>
                            <p>Delivery</p>
                            <p>{deliveryFee}</p>
                        </div>
                        
                        <div className='flex justify-between border p-2 w-[20%]'>
                            <p>Subtotal</p>
                            <p>{subtotal.toFixed(2)}</p>
                        </div>
                        
                        <div className='flex justify-between border p-2 w-[20%]'>
                            <p>Total</p>
                            <p>{total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='flex justify-between w-full mt-8'>
                        <div className='w-full'>
                            <Button className='w-[25%] h-15 rounded'><span className='bold text-lg mr-3'>Check out</span>  <IoEnterOutline size={30} /> </Button>
                        </div>
                        <div className=' rounded border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 flex '>
                            <input className="px-4 custom-transparent-input bg-transparent h-full focus:border-transparent focus:outline-none p3" placeholder="Please enter promo code" />
                            <Button className='rounded h-full'>Apply Discount</Button>
                        </div>
                    </div>
                    <div className='w-full mt-4 flex mb-12'>
                        <p className='flex'><HiArrowSmallLeft size={20} /> <span className=' ml-2'> Continue Shopping</span></p>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export default Cart;
