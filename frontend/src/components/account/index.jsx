import React from 'react'
import { Breadcrumbs, BreadcrumbItem, Card, CardBody, Button, Link, CardHeader, Image, Divider, CardFooter, Input } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
    API,
    AUTH_ENDPOINTS,
    getAxiosError,
} from "../../helpers/constant";
import { hideLoading, showLoading } from "../../redux/slices/loadingSlice";
import { setUser } from "../../redux/slices/userSlice";
import { useSnackbar } from "notistack";
import UserDetailsModal from '../../modals/UserDetailsModal'; 

function PersonalDetails() {
  const currentUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

   
    const personalData = [
        {
            "name": currentUser?.name,
        },
        {
            "email": currentUser?.email,
        },
        {
            "password": currentUser?.password,
        },
        {
            "phone": currentUser?.phone
        }
    ];

    return (
        <>
            <p className='py-8 font-serif bold text-3xl'>Personal Details</p>
            {
                personalData.map((user, index) => (
                    <Card key={index} className='flex p-6 rounded w-[120%] mb-4'>
                        <div className="flex justify-between w-full">
                            <div>
                                <p className='text-xl font-extrabold font-serif py-2 capitalize'>{Object.keys(user)[0]}</p>
                                <p className=' font-serif font-mono capitalize'>{Object.values(user)[0]}</p>
                            </div>
                            <div className='py-6'>
                                <UserDetailsModal variant="bordered" className='rounded px-12 bg-transparent font-serif'
                                    user={user}
                                    currentUser={currentUser}
                                    dispatch={dispatch}
                                    enqueueSnackbar={enqueueSnackbar}
                                 />
                            </div>
                        </div>
                    </Card>
                ))
            }
        </>
    );

}

export default PersonalDetails
