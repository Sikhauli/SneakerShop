import React from 'react';
import { Checkbox, Link, User, Chip } from "@nextui-org/react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { LiaCcVisa } from "react-icons/lia";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { SiMastercard } from "react-icons/si";

const CustomCheckbox = ({ id, user, isSelected, setIsSelected }) => {
    const handleCheckboxChange = () => {
        setIsSelected(id);
    };

    const getAvatarIcon = (status) => {
        switch (status) {
            case 'Active':
                return <LiaCcVisa size={48} />;
            case 'Offline':
                return <SiMastercard size={48} />;
            case 'online':
                return <HiOutlineCreditCard size={48} />;
            default:
                return <HiOutlineBuildingLibrary size={48} />;
        }
    };

    return (
        <Checkbox
            aria-label={user.name}
            classNames={{
                base: "inline-flex w-full max-w-md bg-content1 hover:bg-content2 items-center justify-start cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent data-[selected=true]:border-primary",
                label: "w-full",
            }}
            isSelected={isSelected === id}
            onValueChange={handleCheckboxChange}
            className="rounded my-1 "
        >
            <div className="w-full flex justify-between gap-2">
                <div className="flex items-center">
                    {getAvatarIcon(user.status)}
                    <div className='flex flex-col ml-4'>
                        <p className='font-serif font-bold '>{user.name}</p>
                        <p className='font-serif text-sm'>{user.username}</p>  
                    </div>
                   
                   
                </div>
                <div className="flex flex-col items-end gap-1 mt-4">
                    <span className="text-tiny text-default-500">{user.role}</span>
                </div>
            </div>
        </Checkbox>
    );
};

export default CustomCheckbox;
