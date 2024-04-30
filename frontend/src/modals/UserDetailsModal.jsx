
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import {
    API,
    AUTH_ENDPOINTS,
    getAxiosError,
} from "../helpers/constant";
import { hideLoading, showLoading } from "../redux/slices/loadingSlice";

export default function UserDetailsModal({ user, currentUser, dispatch, enqueueSnackbar, onUpdate }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updatedValue, setUpdatedValue] = useState(user[Object.keys(user)[0]]);

    const handleUpdate = () => {
        dispatch(showLoading());
        const updatedData = {
            [Object.keys(user)[0]]: updatedValue 
        };
        console.log("currentUser :", currentUser)

        API.patch(`${AUTH_ENDPOINTS.update}${currentUser?._id}`, updatedData)
            .then(() => {
                enqueueSnackbar(`Successfully updated user's", ${Object.keys(user)[0] }`, {
                    variant: "success",
                });
                onClose();
            })
            .catch((error) => {
                enqueueSnackbar(getAxiosError(error), { variant: "error" });
            })
            .finally(() => {
                dispatch(hideLoading());
            });
    }

    return (
        <>
            <Button variant="bordered" onClick={onOpen} className='rounded px-12 bg-transparent font-serif'>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} className='bg-black p-4'>
                <ModalContent>
                    <ModalHeader>Edit <p className='capitalize ml-1'>{Object.keys(user)[0]}</p></ModalHeader>
                    <ModalBody>
                        <Input
                            size='sm'
                            type={Object.keys(user)[0]}
                            label={Object.keys(user)[0]}
                            value={updatedValue}
                            onChange={(e) => setUpdatedValue(e.target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="light" color="danger" onClick={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onClick={handleUpdate}>
                            Update
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

