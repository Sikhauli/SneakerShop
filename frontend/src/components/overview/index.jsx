import React, { useState } from 'react';
import { Breadcrumbs, BreadcrumbItem, Card, CardHeader, CardBody, CardFooter, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider } from "@nextui-org/react";
import { FaJediOrder } from "react-icons/fa6";

const orderedSneakers = [
  { id: 1, name: "Nike Air Max 90", size: 9, color: "Black", quantity: 2, count: 10, orderId: "ORD12345", orderDate: "2024-03-28", estimatedDelivery: "2024-04-05" },
  { id: 2, name: "Adidas Superstar", size: 8, color: "White", quantity: 1, count: 8, orderId: "ORD12346", orderDate: "2024-03-29", estimatedDelivery: "2024-04-07" },
  { id: 3, name: "Jordan 1 Retro High", size: 10, color: "Red", quantity: 3, count: 15, orderId: "ORD12347", orderDate: "2024-03-30", estimatedDelivery: "2024-04-06" },
  { id: 4, name: "Vans Old Skool", size: 7, color: "Blue", quantity: 1, count: 5, orderId: "ORD12348", orderDate: "2024-03-31", estimatedDelivery: "2024-04-08" },
];

// Previous month's data (For demonstration purposes, consider it as last month)
const previousMonthOrders = [
  { name: "Nike Air Max 90", count: 70 },
  { name: "Adidas Superstar", count: 8 },
  { name: "Jordan 1 Retro High", count: 7 },
  { name: "Vans Old Skool", count: 3 },
];

function Overview() {
  
  const [changePercentage, setChangePercentage] = useState(2);
  const [addvalue, setAddvalue] = useState(400);

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1
  const currentYear = currentDate.getFullYear();

  // Calculate current month's orders for each sneaker
  const currentMonthOrders = orderedSneakers.reduce((acc, order) => {
    acc[order.id] = (acc[order.id] || 0) + 1;
    return acc;
  }, {});
  
  const data = orderedSneakers.map(sneaker => {
    const currentCount = currentMonthOrders[sneaker.id] || 0;
    const previousCount = previousMonthOrders.find(item => item.id === sneaker.id)?.count || 0;
    const difference = currentCount - previousCount;
    let percentageDifference;
    if (previousCount !== 0) {
      percentageDifference = ((difference / previousCount) * 100).toFixed(2);
    } else {
      percentageDifference = 'N/A';
    }
    const arrowColor = difference > 0 ? 'blue' : (difference < 0 ? 'red' : 'black');
    const arrowIcon = difference > 0 ? '▲' : (difference < 0 ? '▼' : '');
    return { ...sneaker, currentCount, previousCount, percentageDifference, arrowColor, arrowIcon };
  });

  const itemsData = [
    {
      name: "Orders",
      icon: <FaJediOrder />,
      number: addvalue,
      increase: `${changePercentage}% than last Month`,
    },
    {
      name: "Delivered",
      icon: <FaJediOrder />,
      number: addvalue,
      increase: `${changePercentage}% than Yesterday`,
    },
    {
      name: "Cancelled",
      icon: <FaJediOrder />,
      number: addvalue,
      increase: `${changePercentage}% for today's delivery`,
    },
    {
      name: "thinl",
      icon: <FaJediOrder />,
      number: addvalue,
      increase: `${changePercentage}% than last week`,
    },
  ];




  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="#" current>Dashbboard</BreadcrumbItem>
      </Breadcrumbs>
      <div className='grid grid-cols-4 gap-4 py-6'>
        {itemsData.map((item, index) => (
          <Card key={index} className='inline-block cursor-pointer hover:bg-gray-950'>
              <CardHeader className="gap-4 justify-between ">
                <Card className='p-4 bg-purple-500'>{item.icon}</Card>
                <div className="flex flex-col text">
                <p className='text-xs font-semibold'>{item.name}</p>
                  <p className='text-xl'>{item.number}</p>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pb-3 text-sm capitalize">
                <p className="text-default-500 "></p>
              </CardBody>
            <CardFooter>
              <p className='text-xs font-bold'>{item.increase}</p>
            </CardFooter>
            </Card>
        ))}
      </div>
      <div className='flex gap-4'>
        <Card className='flex-1 rounded'>
          <CardHeader className='font-semibold '>Placed Orders</CardHeader>
           <CardBody>
            <Table aria-label="Ordered Sneakers" className='bg-transparent'>
              <TableHeader>
                <TableColumn>SNEAKER NAME</TableColumn>
                <TableColumn>SIZE</TableColumn>
                <TableColumn>COLOR</TableColumn>
                <TableColumn>QUANTITY</TableColumn>
                <TableColumn>ORDER ID</TableColumn>
                <TableColumn>ORDER DATE</TableColumn>
                <TableColumn>ESTIMATED DELIVERY</TableColumn>
              </TableHeader>
              <TableBody emptyContent={"No rows to display."}>
                {orderedSneakers.map((sneaker) => (
                  <TableRow key={sneaker.id}>
                    <TableCell>{sneaker.name}</TableCell>
                    <TableCell>{sneaker.size}</TableCell>
                    <TableCell>{sneaker.color}</TableCell>
                    <TableCell>{sneaker.quantity}</TableCell>
                    <TableCell>{sneaker.orderId}</TableCell>
                    <TableCell>{sneaker.orderDate}</TableCell>
                    <TableCell>{sneaker.estimatedDelivery}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
           </CardBody>
        </Card>
        <Card className='flex-2 rounded'>
          <CardHeader>
            <p className='font-semibold mb-4'>Most Selling Sneakers</p>
          </CardHeader>
            <CardBody>
            {data.map((item, index) => (
              <div key={index} className="mb-2">
                <p className='font-semibold text-sm'>{item.name}</p>
                <div className='flex'>
                  <p className='text-xs '>{currentDay}/{currentMonth}/{currentYear}</p>
                  <p style={{ color: item.arrowColor }} className='text-xs'>{item.arrowIcon} {Math.abs(item.difference)} ({item.percentageDifference}%)</p>
                </div>
                <Divider/>
              </div>
            ))}
            </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Overview;

























