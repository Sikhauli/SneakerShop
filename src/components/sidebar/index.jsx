import React, { useState } from 'react';
import { CardBody, CardHeader, Accordion, AccordionItem, Checkbox } from "@nextui-org/react";

function SideBar({ data, sendFilteredData }) {

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedLabel, setSelectedLabel] = useState('');

    const handleFiltersChange = (filterType, filterValue) => {
        setSelectedLabel('');
        let filtered;
        switch (filterType) {
            case 'label':
                filtered = data.filter(item => item.label === filterValue);
                break;
            case 'price':
                filtered = data.filter(item => {
                    const price = parseInt(item.price.replace(/\D/g, ''));
                    switch (filterValue) {
                        case 'R500 - R1000':
                            return price >= 500 && price <= 1000;
                        case 'R1001 - R1500':
                            return price >= 1001 && price <= 1500;
                        case 'Over R1500':
                            return price > 1500;
                        default:
                            return true;
                    }
                });
                break;
            case 'size':
                filtered = data.filter(item => item.size === filterValue);
                break;
            default:
                filtered = data;
        }
        sendFilteredData(filtered);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        handleFiltersChange('size', size); 
    };

    return (
        <div>
            <CardHeader className='justify-between px-4 '>
                <p className='cursor-pointer font-serif hover:underline hover:text-red-500'>Reset Filters</p>
                <p className='cursor-pointer font-serif hover:underline hover:text-purple-500'>Hide Filter</p>
            </CardHeader>
            <CardBody>
                <Accordion variant="splitted">
                    <AccordionItem className='hover:border-none active:border-none' key="1" aria-label="Shop-by" title="Shop By">
                        <ul>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('label', 'Coming Soon')}>
                                    <text className='ml-2 font-serif'>Coming Soon</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('label', 'Exclusive')}>
                                    <text className='ml-2 font-serif'>Exclusive</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('label', 'Last Pairs')}>
                                    <text className='ml-2 font-serif'>Last Pairs</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('label', 'New in')}>
                                    <text className='ml-2 font-serif'>New in</text>
                                </Checkbox>
                            </li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="size" title="Size">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 justify-center">
                            {["3", "4", "5", "6", "7", "8", "9", "10", "11"].map((item, index) => (
                                <div key={index} className={`border hover:bg-purple-600 text-white p-2 flex items-center justify-center cursor-pointer ${selectedSize === item ? 'bg-purple-600' : ''}`} onClick={() => handleSizeSelect(item)}>
                                    <p className="text-center font-serif">{item}</p>
                                </div>
                            ))}
                        </div>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="price" title="Price">
                        <ul>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('price', 'R500 - R1000')}>
                                    <text className='ml-2 font-serif'>R500 - R1000</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('price', 'R1001 - R1500')}>
                                    <text className='ml-2 font-serif'>R1001 - R1500</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleFiltersChange('price', 'Over R1500')}>
                                    <text className='ml-2 font-serif'> Over R1500</text>
                                </Checkbox>
                            </li>
                        </ul>
                    </AccordionItem>
                </Accordion>
            </CardBody>
        </div>
    );
}

export default SideBar;
