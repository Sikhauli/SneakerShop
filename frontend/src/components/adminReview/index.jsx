import React, { useState } from 'react';
import { Input, Button, Avatar, AvatarGroup, Card } from '@nextui-org/react';
import { CiSearch } from 'react-icons/ci';
import CustomTable from '../customTable/index';
import AvatarGroupComponent from "../avatarGroupComponent/index"
import { SiProcessingfoundation } from "react-icons/si";
import { PiStrategyThin } from "react-icons/pi";
import ProgressComponent from "../progressComponent/index"


function AdminReview() {

  const [searchQuery, setSearchQuery] = useState('');
  const [sumOfFive, setSumOfFive] = useState(0);

  const columns = [
    { "key": "product", "name": "Product" },
    { "key": "name", "name": "Reviewer" },
    { "key": "review", "name": "Review" },
    { "key": "date", "name": "Date" },
    { "key": "status", "name": "Status" },
    { "key": "actions", "name": "Actions" }
  ];

  const statusColorMap = {
    published: "success",
    pending: "warning",
  };

  const customers = [
    { id: 2359779879, product: "Nike Air Force 1", name: "John Doe", email: "john@example.com", review: "Great product! I really loved the quality and the service. Definitely recommended.", date: "2024-04-04", status: "published" },
    { id: 3245245234, product: "Adidas Ultraboost", name: "Jane Smith", email: "jane@example.com", review: "Not satisfied with the quality of the product. Expected better performance.", date: "2024-04-03", status: "published" },
    { id: 2354645363, product: "New Balance", name: "Alice Johnson", email: "alice@example.com", review: "Excellent service and exceptional product quality. Couldn't be happier!", date: "2024-04-02", status: "pending" },
    { id: 1234253244, product: "Puma RS-X", name: "Bob Brown", email: "bob@example.com", review: "Average experience, although the product could use some improvements in certain areas.", date: "2024-04-01", status: "published" },
    { id: 2342348975, product: "Vans", name: "Emma White", email: "emma@example.com", review: "Great experience overall! The product exceeded my expectations in terms of quality and performance.", date: "2024-03-31", status: "published" },
    { id: 6097009893, product: "Converse", name: "Michael Davis", email: "michael@example.com", review: "Poor quality product. Disappointed with the performance and durability.", date: "2024-03-30", status: "pending" },
    { id: 7234234978, product: "Reebok ", name: "Sophia Miller", email: "sophia@example.com", review: "Amazing service! The product arrived on time and in perfect condition. Highly recommended!", date: "2024-03-29", status: "published" },
    { id: 8234987987, product: "Asics Gel-Lyte ", name: "William Wilson", email: "william@example.com", review: "Satisfactory product. It met my expectations, although there is room for improvement in certain aspects.", date: "2024-03-28", status: "pending" },
    { id: 9567897080, product: "Under Armour ", name: "Olivia Taylor", email: "olivia@example.com", review: "Terrible experience with the product and customer service. Would not recommend to others.", date: "2024-03-27", status: "published" },
    { id: 1234097090, product: "Salomon ", name: "James Anderson", email: "james@example.com", review: "Could be better. The product has potential, but there are some areas that need improvement for a better user experience.", date: "2024-03-26", status: "published" }
  ];

  // Function to filter data based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSumChange = (sum) => {
    setSumOfFive(sum);
  };

  return (
    <div className='overflow-y-auto'>
      <p className='font-serif font-bold text-2xl'>Manage Reviews</p>
      <div className='flex gap-4 my-4'>
        <p className='border-b border-purple-500 font-serif'>Published</p>
        <p className='border-b font-serif'>Pending</p>
      </div>
      <div className='flex p-4 gap-8'>
        <div className='p-2'>
          <PiStrategyThin size={100}/>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='font-serif text-7xl py-2'>{sumOfFive}</p>
          <p className='font-serif text-xs'>- of 7 reviews{' '} <span className='bg-gray-300 rounded-lg p-1 text-black'>+1 this week</span></p>
        </div>
        <ProgressComponent onSumChange={handleSumChange} />      
      </div>
      <div className="my-6 flex justify-between">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[20rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<CiSearch size={18} />}
          type="search"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div></div>
      <div className="flex w-full flex-col">
        <div className="">
          <CustomTable
            columns={columns}
            data={customers.filter((customer) =>
              customer.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
              customer.name.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )}
            statusColorMap={statusColorMap}
          />
        </div>
      </div>

    </div>
  );
}

export default AdminReview;
