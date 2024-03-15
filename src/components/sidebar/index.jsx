import React, { useState } from 'react'
import { Card, CardBody, Button, Link, CardHeader, Accordion, AccordionItem, Checkbox, Input } from "@nextui-org/react";
import GridLayout from "../gridLayout/index"

function SideBar({ isSelected, onValueChange, children, setIsSelected }) {
    const defaultContent = "vhuthu"
    const value = 3;

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
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'>Coming Soon [{value}]</text> 
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'>Exclusive [{value}]</text> 
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'>Last Pairs [{value}]</text> 
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'>New in [{value}]</text> 
                                </Checkbox>
                            </li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="size" title="Size">
                        <GridLayout/>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="price" title="Price">
                        <ul>
                            <li>
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'>R500 - R1000 [{value}]</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'>R1001 - R1500 [{value}]</text>
                                </Checkbox>
                            </li>
                            <li>
                                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                                    <text className='ml-2'> Over R1500 [{value}]</text>
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
