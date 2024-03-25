import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, CardHeader, Image, Divider, CardFooter, Input, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

function Review() {

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
      images: [
        { id: 6, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png", title: "  85W MagSafe MacBook Charger - White" },
        
      ]
    },
    {
      images: [
        { id: 10, image: "https://www.pngall.com/wp-content/uploads/2/Black-Sneakers-Transparent.png", title: "Volkano Wireless Bluetooth Headphones - Impulse Series - White" }
      ]
    },
    {
      images: [
        { id: 3, image: "https://www.pngall.com/wp-content/uploads/2/Sneakers-PNG-Clipart.png", title: "Keyboard for HP 15 - BA 15 - BS 250 G6 255 G6(2B - AB306C211, PK132044A01)" },
      ]
    }
  ];

  return (
    <>
      <div className='flex justify-between w-[120%]'>
        <p className='p-6 font-serif text-3xl'>Product Review</p>
        <div className='flex'>
          <p className='p-6 font-serif'>Orders placed in:</p>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered" className='mt-4 px-6 rounded font-serif'>
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
      <div className='flex flex-row gap-6 mb-5 ml-8'>
        <p className='font-serif mb-2 p-2 border-b hover:border-b hover:border-purple-500 '>Order Items</p>
        <p className='font-serif mb-2 p-2 hover:border-b hover:border-purple-500'>Review History</p>
      </div>
      <div className=' w-[120%]'>
        <CardBody className='flex flex-row flex-wrap gap-4 p-8'>
          {imageData.map((group, index) => (
            <Card key={index} className="w-full">
              <CardBody className='flex flex-row flex-wrap gap-4 p-8 '>
                <div className='flex justify-between'>
                  <div className='flex gap-4'>
                    {group.images.map((image) => (
                      <div key={image.id} className='p-2 flex gap-4'>
                        <img src={image.image} alt={`Image ${image.id}`} className='w-1/5 h-auto' />
                        <p className='text-bolder text-sm font-sarif mt-2'>{image.title}</p> 
                      </div>
                    ))}
                    <div>
                      
                    </div>
                  </div>
                  <Button variant="bordered" className='mt-6 px-12 rounded font-serif'>
                    Write Review
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </CardBody>
      </div>
    </>
  )
}

export default Review