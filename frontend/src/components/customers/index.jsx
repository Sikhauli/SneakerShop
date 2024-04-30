import React, { useState } from 'react';
import { Tabs, Tab, Input } from '@nextui-org/react';
import { CiSearch } from 'react-icons/ci';
import CustomTable from '../customTable/index';

const columns = [
  { key: "name", name: "Name" },
  { key: "email", name: "Email" },
  { key: "phoneNumber", name: "Phone Number" },
  { key: "status", name: "Status" },
  { key: "actions", name: "Actions" }
];

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phoneNumber: "123-456-7890", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phoneNumber: "987-654-3210", status: "active" },
];

const complaints = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "resolved"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    message: "Nulla facilisi. Aenean sit amet nisi eu ligula vehicula fermentum.",
    status: "pending"
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "resolved"
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    message: "Nulla facilisi. Aenean sit amet nisi eu ligula vehicula fermentum.",
    status: "pending"
  },];

const complaintscColumns = [
  { key: "id", name: "ID" },
  { key: "name", name: "Name" },
  { key: "phoneNumber", name: "Phone Number" },
  { key: "message", name: "Complaint Message" },
  { key: "status", name: "Status" },
];

const complaintsStatusColorMap = {
  resolved: "success",
  pending: "danger",
}

const statusColorMap = {
  active: "success",
  blocked: "danger",
}

const help = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "pending"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    message: "Nulla facilisi. Aenean sit amet nisi eu ligula vehicula fermentum.",
    status: "pending"
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "pending"
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    message: "Nulla facilisi. Aenean sit amet nisi eu ligula vehicula fermentum.",
    status: "resolved"
  },];

const helpColumns = [
  { key: "id", name: "ID" },
  { key: "name", name: "Name" },
  { key: "phoneNumber", name: "Phone Number" },
  { key: "message", name: "Complaint Message" },
  { key: "status", name: "Status" },
  { key: "button", name: "" }
];

const helpStatusColorMap = {
  resolved: "success",
  pending: "danger",
}

function Customers() {
  const [selected, setSelected] = useState('photos');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter data based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <p className='font-serif font-bold text-2xl'>Manage Customers</p>
      <div className="my-6">
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
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="photos" title="Users">
            <div className="">
              <CustomTable
                columns={columns}
                data={customers.filter((customer) =>
                  customer.name.toLowerCase().includes(searchQuery.toLowerCase())
                )}
                statusColorMap={statusColorMap}
              />
            </div>
          </Tab>
          <Tab key="music" title="Complaints">
            <div className="">
              <CustomTable
                columns={complaintscColumns}
                data={complaints.filter((complaint) =>
                  complaint.name.toLowerCase().includes(searchQuery.toLowerCase())
                )}
                statusColorMap={complaintsStatusColorMap}
              />
            </div>
          </Tab>
          <Tab key="videos" title="Help Center">
            <div className="">
              <CustomTable
                columns={helpColumns}
                data={help.filter((helpItem) =>
                  helpItem.name.toLowerCase().includes(searchQuery.toLowerCase())
                )}
                statusColorMap={helpStatusColorMap}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Customers;
