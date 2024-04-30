import React, { useState } from "react";
import {
    API,
    getAxiosError,
    AUTH_ENDPOINTS
} from "../helpers/constant";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    AutocompleteItem,
    Autocomplete,
    Input,
    Select,
    SelectItem,

} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/slices/loadingSlice";

export default function AddSneaker({ isOpen, onClose }) {

    const [values, setValues] = useState();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onChange = (e) => {
        e?.preventDefault();
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const getImage = (e) => {
        e?.preventDefault();
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target?.files,
            };
        });
    };

    const onClear = () => {
        setValues(null);
    };

    const onSubmit = () => {
        dispatch(showLoading());
        API.post(AUTH_ENDPOINTS.register, values)
            .then(() => {
                enqueueSnackbar("Admin added successfully", { variant: 'success' });
            })
            .catch((error) => {
                enqueueSnackbar(getAxiosError(error), { variant: 'error' });
            })
            .finally(() => {
                dispatch(hideLoading());
                onClear()
            });
    };

    const FIELDS = [
        {
            name: "name",
            onChange: (e) => setValues({ ...values, name: e.target.value }),
            label: "Name",
            componentName: "input",
            isRequired: false,
        },
        {
            name: "email",
            onChange: (e) => setValues({ ...values, email: e.target.value }),
            label: "Email",
            componentName: "input",
            isRequired: true,
        },
        {
            name: "password",
            onChange: (e) => setValues({ ...values, password: e.target.value }),
            label: "Password",
            componentName: "input",
            isRequired: true,
        },
        {
            name: "phone",
            onChange: (e) => setValues({ ...values, phone: e.target.value }),
            label: "Phone",
            componentName: "input",
            isRequired: false,
        },
        {
            name: "userType",
            onChange: (value) => setValues({ ...values, userType: value.currentKey }),
            label: "User Type",
            componentName: "select",
            isRequired: true,
            list: ["ADMIN", "CUSTOMER"],
        },
    ];


    return (

        <>
            <Modal
                size='3xl'
                isOpen={isOpen}
                onClose={onClose}
                className="dark"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add Sneaker</ModalHeader>
                            <ModalBody>
                                <form onSubmit={onSubmit}>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        {FIELDS.map((data, i) => {
                                            if (data?.componentName === "autocomplete")
                                                return (
                                                    <Autocomplete
                                                        key={i}
                                                        label={data.label}
                                                        className="z-10"
                                                        radius="sm"
                                                        isLoading={loading}
                                                        onInputChange={data.onInputChange}
                                                        onSelectionChange={data.onSelectionChange}
                                                        items={data.list}
                                                        inputValue={data.inputValue}
                                                        description={data.defaultValue}
                                                    >
                                                        {(item) => (
                                                            <AutocompleteItem
                                                                textValue={item.name}
                                                                description={item.address}
                                                                key={item._id}
                                                            >
                                                                {item.name}
                                                            </AutocompleteItem>
                                                        )}
                                                    </Autocomplete>
                                                );

                                            if (data?.componentName === "select")
                                                return (
                                                    <Select
                                                        isRequired={data?.required}
                                                        key={i}
                                                        label={data?.label}
                                                        className=""
                                                        radius="sm"
                                                        onSelectionChange={data?.onChange}
                                                        defaultSelectedKeys={
                                                            data?.defaultValue && [data?.defaultValue]
                                                        }
                                                    >
                                                        {data?.list?.map((v) => (
                                                            <SelectItem key={v} value={v} className="bg-black rounded">
                                                                {v}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                );
                                            return (
                                                <Input
                                                    defaultValue={data?.defaultValue}
                                                    className=""
                                                    key={i}
                                                    radius="sm"
                                                    {...data}
                                                />
                                            );
                                        })}
                                    </div>

                                    <div className="flex justify-between my-6">
                                        <div className="">
                                            <p className="text-primary text-sm">Upload images</p>
                                            <input
                                                radius="sm"
                                                onChange={getImage}
                                                className="text-xs inline-block"
                                                name="images"
                                                type="file"
                                                multiple
                                            />
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose} onClick={onClear}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={onSubmit}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
