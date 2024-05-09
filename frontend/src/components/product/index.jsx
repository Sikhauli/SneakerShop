import React, { useState } from 'react';
import { Input, Button, Table, TableHeader, TableBody, TableRow, TableColumn, TableCell, getKeyValue, Pagination, Spinner, } from '@nextui-org/react';
import { CiSearch } from 'react-icons/ci';
import CustomTable from '../customTable/index';
import AddItem from "../../modals/addItem"

const rows = [
  {
    id: 2359779879,
    productName: "Product A",
    pricing: "$50",
    sellUnit: "Each",
    returns: "30 days",
    rating: 4.5,
    stock: 100,
    action: "View Details"
  },
  {
    id: 3245245234,
    productName: "Product B",
    pricing: "$40",
    sellUnit: "Each",
    returns: "15 days",
    rating: 4.0,
    stock: 80,
    action: "View Details"
  },
  {
    id: 2354645363,
    productName: "Product C",
    pricing: "$60",
    sellUnit: "Each",
    returns: "45 days",
    rating: 4.2,
    stock: 120,
    action: "View Details"
  },
  {
    id: 1234253244,
    productName: "Product D",
    pricing: "$55",
    sellUnit: "Each",
    returns: "20 days",
    rating: 4.7,
    stock: 90,
    action: "View Details"
  },
  {
    id: 2342348975,
    productName: "Product E",
    pricing: "$70",
    sellUnit: "Each",
    returns: "60 days",
    rating: 4.9,
    stock: 150,
    action: "View Details"
  },
  {
    id: 6097009893,
    productName: "Product F",
    pricing: "$65",
    sellUnit: "Each",
    returns: "30 days",
    rating: 4.3,
    stock: 110,
    action: "View Details"
  },
  {
    id: 7234234978,
    productName: "Product G",
    pricing: "$80",
    sellUnit: "Each",
    returns: "90 days",
    rating: 4.6,
    stock: 200,
    action: "View Details"
  },
  {
    id: 8234987987,
    productName: "Product H",
    pricing: "$75",
    sellUnit: "Each",
    returns: "30 days",
    rating: 4.8,
    stock: 180,
    action: "View Details"
  },
  {
    id: 9567897080,
    productName: "Product I",
    pricing: "$90",
    sellUnit: "Each",
    returns: "45 days",
    rating: 4.4,
    stock: 130,
    action: "View Details"
  },
  {
    id: 1234097090,
    productName: "Product J",
    pricing: "$85",
    sellUnit: "Each",
    returns: "60 days",
    rating: 4.2,
    stock: 160,
    action: "View Details"
  }
];

const columns = [
  {
    key: "productName",
    label: "Product Name",
  },
  {
    key: "sellUnit",
    label: "Sell Unit",
  },
  {
    key: "returns",
    label: "Returns",
  },
  {
    key: "rating",
    label: "Rating",
  },
  {
    key: "pricing",
    label: "Pricing",
  },
  {
    key: "stock",
    label: "Stock",
  },
  {
     key: "actions",
      name: "Actions"
  }
];

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Product() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = React.useState(1);

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
      <p className='font-serif font-bold text-2xl'>Manage Products</p>
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
        <Button variant="bordered" className="rounded py-2 " onClick={handleAddAdmin}> Add Product </Button>
      </div>
      <div className='mb-4 px-1 flex '>
        <p className='text-bold text-xl font-serif'>Products</p>
      </div>
      <div className="flex w-full flex-col overflow-y-auto">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <AddItem isOpen={isOpen} onClose={toggleModal} />
    </>
  );
}

export default Product;
