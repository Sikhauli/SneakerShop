import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, Link, CardHeader, Image, Divider, CardFooter, Input } from "@nextui-org/react";


function Address() {
 

  const combinedAddresses = [
    {
      "residentialAddress": {
        "area": "37 protea",
        "street": "9340 Phogolo Street",
        "city": "Centurion",
        "suburb": "Olievenhoutbosch Ext 36",
        "postalCode": "0187"
      },
      "contactInformation": {
        "name": "Sikhauli Vhuthuhawe",
        "phoneNumber": "0713459503"
      }
    },
    {
      "residentialAddress": {
        "street": "42 Willow Road",
        "city": "Roodepoort",
        "suburb": "Constantia Kloof",
        "area": "Johannesburg",
        "postalCode": "1709"
      },
      "contactInformation": {
        "name": "John Smith",
        "phoneNumber": "0812345678"
      }
    }
  ];


  return (
    <>
      <div className='flex flex-row justify-between w-[120%]'>
        <p className='py-8 font-serif bold text-xl'>Address Details</p>
        <Button variant="bordered" className='p-4 font-serif text-sm my-4 rounded bg-transparent'>Add Address</Button>
      </div>
      {combinedAddresses.map((address, index) => (
        <Card key={index} className='flex p-6 rounded w-[120%] mb-4'>
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
            <div className=''>
              <Button className='rounded px-2 bg-transparent hover:bg-gray-950'>Delete</Button>
              <Button className='rounded px-2 bg-transparent hover:bg-gray-950'>Edit</Button>
            </div>
          </div>
        </Card>
      ))}
    </>

  )
}

export default Address