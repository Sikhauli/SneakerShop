import React, { useState } from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, CardHeader, Image, Divider, CardFooter, Input, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CgTrack } from "react-icons/cg";

function Returns() {

  const [completed, setCompleted] = useState(true)


  const imageData = [
    {
      images: [
        { id: 6, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" }
      ]
    },
    {
      images: [
        { id: 10, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" }
      ]
    },
    {
      images: [
        { id: 3, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
      ]
    }
  ];


  return (
    <>
      <div className='flex flex-row justify-between w-[120%] mb-4 bg-transparent'>
        <div className="p-6">
          <p className='font-serif text-3xl'>Returns</p>
        </div>
        <Button variant="bordered" className='mt-4 mr-4 px-8 font-serif text-sm rounded bg-transparent '>Log Return</Button>
      </div>
      <div className=' w-[120%]'>
        <CardBody className='flex flex-row flex-wrap gap-4 p-8'>
          {imageData.map((group, index) => (
            <Card key={index} className="w-full">
              <CardBody className='flex flex-row flex-wrap gap-4 p-8 '>
                <div className='flex justify-between'>
                  <div className='flex gap-4'>
                    {group.images.map((image) => (
                      <div key={image.id} className='w-1/5 p-2 border'>
                        <img src={image.image} alt={`Image ${image.id}`} className='w-full h-auto' />
                      </div>
                    ))}
                    <div>
                      <p className='text-bolder text-2xl font-serif '>RRN-SVZE8-9YQ4</p>
                      <p className='font-serif'>{completed ? "Return Concluded" : "Return in Progress"}</p>
                    </div>
                  </div>
                  <Button startContent={<CgTrack size={32}/>} className='w-fit rounded bg-transparent' ></Button>
                  <p className='py-2 font-serif'>Track</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </CardBody>
      </div>

    </>
  )
}

export default Returns