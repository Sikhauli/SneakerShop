import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, Link, CardHeader, Image, Divider, CardFooter, Input } from "@nextui-org/react";


function PersonalDetails() {

    const personalData = [
        {
            "name": "John Doe",
        },
        {
            "email": "john.doe@example.com",
        },
        {
            "password": "password",
        },
        {
            "phone": "123-456-7890"
        }
    ];

    return (
        <>
            <p className='py-8 font-serif bold text-3xl'>Personal Details</p>
            {
                personalData.map((user, index) => (
                    <Card key={index} className='flex p-6 rounded w-[120%] mb-4'>
                        <div className="flex justify-between w-full">
                            <div>
                                <p className='text-xl font-extrabold font-serif py-2 capitalize'>{Object.keys(user)[0]}</p>
                                <p className=' font-serif font-mono capitalize'>{Object.values(user)[0]}</p>
                            </div>
                            <div className='py-6'>
                                <Button className='rounded px-12 bg-transparent font-serif border-white hover:bg-gray-950'>Edit</Button>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </>
    );

}

export default PersonalDetails
