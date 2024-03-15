import GridLayout from "../gridLayout/index"
import React, { useState } from 'react';
import { CardBody, CardHeader, Accordion, AccordionItem, Checkbox } from "@nextui-org/react";
import Brand from "../../pages/Brand/index"

function SideBar({ data, sizeData }) {

    const [filteredData, setFilteredData] = useState(data);

    const handleLabelChange = (label) => {
        const filtered = data.filter(item => item.label === label);
        setFilteredData(filtered);
    };

    const handlePriceChange = (priceRange) => {
        const filtered = data.filter(item => {
            const price = parseInt(item.price.replace(/\D/g, ''));
            switch (priceRange) {
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
        setFilteredData(filtered);
    };

    return (
        <div>
            <CardHeader className='justify-between px-4 '>
                <p className='cursor-pointer hover:underline hover:text-red-500'>Reset Filters</p>
                <p className='cursor-pointer hover:underline hover:text-purple-500'>Hide Filter</p>
            </CardHeader>
            <CardBody>
                <Accordion variant="splitted">
                    <AccordionItem className='hover:border-none active:border-none' key="1" aria-label="Shop-by" title="Shop By">
                        <ul>
                            <li>
                                <Checkbox onValueChange={() => handleLabelChange('Coming Soon')}>
                                    <text className='ml-2'>Coming Soon</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleLabelChange('Exclusive')}>
                                    <text className='ml-2'>Exclusive</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleLabelChange('Last Pairs')}>
                                    <text className='ml-2'>Last Pairs</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handleLabelChange('New in')}>
                                    <text className='ml-2'>New in</text>
                                </Checkbox>
                            </li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="size" title="Size">
                        <GridLayout filteredData={filteredData}/>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="price" title="Price">
                        <ul>
                            <li>
                                <Checkbox onValueChange={() => handlePriceChange('R500 - R1000')}>
                                    <text className='ml-2'>R500 - R1000</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handlePriceChange('R1001 - R1500')}>
                                    <text className='ml-2'>R1001 - R1500</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox onValueChange={() => handlePriceChange('Over R1500')}>
                                    <text className='ml-2'> Over R1500</text>
                                </Checkbox>
                            </li>
                        </ul>
                    </AccordionItem>
                </Accordion>
            </CardBody>
        {/*  <Brand sidebarData={{ filteredData, sizeData }} /> */}
        </div>
    );
}

export default SideBar;
