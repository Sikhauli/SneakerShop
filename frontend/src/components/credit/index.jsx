import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, Button } from "@nextui-org/react";
function Credit() {


  const creditData = [
    { Date: "4 Mar 2024", Description: "Credit used on order 148091673", Amount: "- R 516" },
    { Date: "4 Mar 2024", Description: "Credit for order 147975437.", Amount: "R 287" },
    { Date: "4 Mar 2024", Description: "Credit for order 147975437.", Amount: "R 229" },
    { Date: "2 Jan 2024", Description: "Refund reserved for RFN-xbjy-8mqk", Amount: "- R 649" },
    { Date: "2 Jan 2024", Description: "Credit for order 140941815", Amount: "R 649" },
    { Date: "24 Nov 2023", Description: "Applied credit from order 140628821 to replacement order 140941815", Amount: "- R 649" },
    { Date: "24 Nov 2023", Description: "Return Credit for order 140628821 and MRRN-M7J6P-A9M7", Amount: "R 649" }
  ];


  return (
    <>
      <p className='py-8 font-serif font-extrabold text-3xl'>Credit & Refunds</p>
      <Card className='flex flex-row justify-between w-[120%] mb-4 '>
        <div className="p-6">
          <p className='font-serif text-xl mb-2'>Available Credit</p>
          <p className='font-extrabold text-2xl mb-3'>R 0</p>
          <p className='font-serif text-sm'>Credit will be automatically applied to your next purchase.</p>        
        </div>
        <Button variant="bordered" className='mt-12 mr-4 px-4 font-serif text-sm rounded bg-transparent'>Redeem Gift Voucher</Button>
      </Card>
      <div className='flex flex-row justify-between w-[120%] mb-4 p-6'>
        <div>
          <div className='flex flex-row gap-6 mb-5'>
            <p className='font-serif mb-2 p-2 border-b hover:border-b hover:border-purple-500 '>Available Credit</p>
            <p className='font-serif mb-2 p-2 hover:border-b hover:border-purple-500'>Refunds History</p>
          </div>
          <div className=' w-[130%]'>
            <Table isStriped aria-label="Credit Details" className='rounded'>
              <TableHeader>
                <TableColumn>Date</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Amount</TableColumn>
              </TableHeader>
              <TableBody>
                {creditData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.Date}</TableCell>
                    <TableCell>{item.Description}</TableCell>
                    <TableCell>{item.Amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Credit