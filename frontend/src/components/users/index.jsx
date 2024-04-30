import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import { CiSearch } from 'react-icons/ci';
import CustomTable from '../customTable/index';
import AddAdmin from "../../modals/addAdmin"

const customers = [
  { id: 2359779879, name: "John Doe", email: "john@example.com", phoneNumber: "123-456-7890", status: "active" },
  { id: 3245245234, name: "Jane Smith", email: "jane@example.com", phoneNumber: "987-654-3210", status: "blocked" },
  { id: 2354645363, name: "Alice Johnson", email: "alice@example.com", phoneNumber: "555-123-4567", status: "active" },
  { id: 1234253244, name: "Bob Brown", email: "bob@example.com", phoneNumber: "987-123-4567", status: "active" },
  { id: 2342348975, name: "Emma White", email: "emma@example.com", phoneNumber: "555-987-6543", status: "active" },
  { id: 6097009893, name: "Michael Davis", email: "michael@example.com", phoneNumber: "123-987-6543", status: "blocked" },
  { id: 7234234978, name: "Sophia Miller", email: "sophia@example.com", phoneNumber: "555-456-7890", status: "active" },
  { id: 8234987987, name: "William Wilson", email: "william@example.com", phoneNumber: "987-456-1234", status: "active" },
  { id: 9567897080, name: "Olivia Taylor", email: "olivia@example.com", phoneNumber: "123-654-9870", status: "blocked" },
  { id: 1234097090, name: "James Anderson", email: "james@example.com", phoneNumber: "555-789-1234", status: "active" }
];

const columns = [
  { key: "id", name: "ID" },
  { key: "name", name: "Name" },
  { key: "phoneNumber", name: "Phone Number" },
  { key: "status", name: "Status" },
  { key: "actions", name: "Actions" }
];


const statusColorMap = {
  active: "success",
  blocked: "danger",
}

function Users() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleAddAdmin = () => {
    setIsOpen(true);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Function to filter data based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <p className='font-serif font-bold text-2xl'>Manage Admin</p>
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
        <Button variant="bordered" className="rounded py-2" onClick={handleAddAdmin}> Add Admin </Button>
      </div>
      <div className='mb-4 px-1 flex '>
        <p className='text-bold text-xl font-serif'>Admin</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="">
          <CustomTable
            columns={columns}
            data={customers.filter((helpItem) =>
                helpItem.name.toLowerCase().includes(searchQuery.toLowerCase())||
                helpItem.email.toLowerCase().includes(searchQuery.toLowerCase())||
                helpItem.status.toLowerCase().includes(searchQuery.toLowerCase())||
                helpItem.id.toString().toLowerCase().includes(searchQuery.toLowerCase())||
                helpItem.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase())
              )}
            statusColorMap={statusColorMap}
          />
        </div>
      </div>
      <AddAdmin isOpen={isOpen} onClose={toggleModal} /> 
    </>
  );
}

export default Users;
