import React, { useState } from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button as NextUIButton, CardHeader, Image, Divider, CardFooter, Input, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CgTrack } from "react-icons/cg";

function Voucher() {

  const [completed, setCompleted] = useState(true)

  const CustomButton = () => {
    return (
      <NextUIButton variant="bordered" className='px-12 py-7 ml-[50%] rounded'>
        Apply Voucher
      </NextUIButton>
    )
  }

  return (
    <>
      <div className='flex flex-row justify-between w-[120%] mb-4 bg-transparent'>
        <div className="p-6">
          <p className='font-serif text-3xl'>Apply a Gift Voucher Code</p>
        </div>
      </div>
      <div className=' w-[120%]'>
        <CardBody className='flex flex-row flex-wrap gap-4 p-8 '>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-transparent  w-[360%] py-5 px-4 rounded",
            }}
            label="Enter a gift voucher code"
            size="sm"
            isRequired
            type="search"
            variant="underlined"
          />
          <CustomButton/>
        </CardBody>
      </div>
    </>
  )
}

export default Voucher
