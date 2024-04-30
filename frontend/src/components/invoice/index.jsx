import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, CardHeader, Image, Divider, CardFooter, Input, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

function Invoice() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const generateYearOptions = () => {
    const years = [];
    for (let i = currentYear - 1; i >= currentYear - 10; i--) {
      years.push(i);
    }
    return years;
  };

  const handleOptionClick = (option) => {
    const currentDate = new Date();
    let startDate, endDate;

    switch (option) {
      case '3 Months':
        endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, currentDate.getDate());
        break;
      case '6 Months':
        endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, currentDate.getDate());
        break;
      case '1 Year':
        endDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
        break;
      default:
        if (option.startsWith('Previous Year')) {
          const year = parseInt(option.split(' ')[2]);
          startDate = new Date(year, 0, 1);
          endDate = new Date(year, 11, 31);
        }
        break;
    }

    if (startDate && endDate) {
      console.log(`Selected option: ${option}. Start date: ${startDate.toLocaleDateString()}, End date: ${endDate.toLocaleDateString()}`);
    } else if (endDate) {
      console.log(`Selected option: ${option}. End date: ${endDate.toLocaleDateString()}`);
    }
  };


  const imageData = [
    {
      order: { id: '#87795867e', date: '05 March 2024' },
      images: [
        { id: 1, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" },
        { id: 2, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
        { id: 3, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
        { id: 4, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" },
        { id: 5, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
        { id: 6, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" }
      ]
    },
    {
      order: { id: '#123456789', date: '10 March 2024' },
      images: [
        { id: 7, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" },
        { id: 8, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" },
        { id: 9, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
        { id: 10, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" }
      ]
    },
    {
      order: { id: '#987654321', date: '15 March 2024' },
      images: [
        { id: 1, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png" },
        { id: 2, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
        { id: 3, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png" },
      ]
    }
  ];



  return (
    <>
    <div className=''>
      <div className='flex justify-between w-[120%]'>
          <p className='p-6 font-serif text-3xl'>Invoices</p>
        <div className='flex'>
            <p className='p-8 font-serif'>Orders placed in:</p>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button variant="bordered" className='mt-6 px-6 rounded font-serif'>
                Select Duration
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Duration Options">
              <DropdownItem>
                  <p className="font-bold font-serif text-black">3 Months</p>
                  <p className="text-sm font-serif text-black">Starting from {currentDate.toLocaleDateString()}</p>
              </DropdownItem>
              <DropdownItem>
                  <p className="font-bold font-serif text-black">6 Months</p>
                  <p className="text-sm font-serif text-black">Starting from {currentDate.toLocaleDateString()}</p>
              </DropdownItem>
              <DropdownItem>
                  <p className="font-bold font-serif text-black">1 Year</p>
                  <p className="text-sm font-serif text-black">Starting from {currentDate.toLocaleDateString()}</p>
              </DropdownItem>
              <DropdownItem>
                  <p className="font-bold font-serif text-black">Previous Years</p>
                  <div className="flex flex-wrap font-serif">
                  {generateYearOptions().map((year) => (
                    <Button key={year} variant="ghost" onClick={() => handleOptionClick(`Previous Year ${year}`)}>
                      {year}
                    </Button>
                  ))}
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div> 
      <div className=' w-[120%]'>
          <CardBody className='flex flex-row flex-wrap gap-4 p-8'>
            {imageData.map((group, index) => (
              <Card key={index} className="w-full">
                <CardHeader className='flex justify-between'>
                  <div className='flex gap-4'>
                    <p className='font-serif'>Order</p>
                    <p className='font-serif'>{group.order.id}</p>
                    <p className='font-serif'>{group.order.date}</p>
                  </div>
                  <Button variant="bordered" className='px-8 bg-transparent rounded font-serif'>
                    View Invoice
                  </Button>
                </CardHeader>
                <Divider className="my-4" />
                <CardBody className='flex flex-row flex-wrap gap-4 p-8'>
                  {group.images.map((image) => (
                    <div key={image.id} className='w-1/5 p-2 border'>
                      <img src={image.image} alt={`Image ${image.id}`} className='w-full h-auto' />
                    </div>
                  ))}
                </CardBody>
              </Card>
            ))}
          </CardBody>
      </div>


     
    </div>
    </>
       
  )
}

export default Invoice