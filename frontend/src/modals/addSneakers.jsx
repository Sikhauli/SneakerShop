// import React, { useState } from "react";
// import {
//     API,
//     getAxiosError,
//     SNEAKER_ENDPOINTS
// } from "../helpers/constant";
// import {
//      Modal,
//     ModalContent, 
//     ModalHeader, 
//     ModalBody, 
//     ModalFooter, 
//     Button, 
//     AutocompleteItem,
//     Autocomplete,
//     Input,
//     Select,
//     SelectItem, 

// } from "@nextui-org/react";
// import { useSnackbar } from "notistack";
// import { useDispatch } from "react-redux";
// import { hideLoading, showLoading } from "../redux/slices/loadingSlice";

// export default function AddSneaker({ isOpen, onClose }) {

//     const [values, setValues] = useState();
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     const { enqueueSnackbar } = useSnackbar();

//     const getImage = (e) => {
//         e?.preventDefault();
//         setValues((prev) => {
//             return {
//                 ...prev,
//                 [e.target.name]: e.target?.files,
//             };
//         });
//     };

//     const onClear = () => {
//         setValues(null);
//     };

//     const onSubmit = () => {
//         dispatch(showLoading());
//         console.log("values :", JSON.stringify(values))
//         API.post(SNEAKER_ENDPOINTS.add, values)
//             .then(() => {
//                 enqueueSnackbar("Sneaker added successfully", { variant: 'success' });
//             })
//             .catch((error) => {
//                 enqueueSnackbar(getAxiosError(error), { variant: 'error' });
//             })
//             .finally(() => {
//                 onClear()
//                 dispatch(hideLoading());
//             });
//     };

//     const FIELDS = [
//         {
//             name: "brand",
//             onChange: (e) => setValues({ ...values, brand: e.target.value }),
//             label: "Brand",
//             componentName: "input",
//             isRequired: true,
//         },
//         {
//             name: "category",
//             onChange: (value) => setValues({ ...values, category: value.currentKey }),
//             label: "Category",
//             componentName: "select",
//             isRequired: true,
//             list: ["Men", "Women", "Kids"],
//         },
//         {
//             name: "size",
//             onChange: (e) => setValues({ ...values, size: e.target.value }),
//             label: "Size",
//             componentName: "input",
//             isRequired: true,
//         },
//         {
//             name: "label",
//             onChange: (value) => setValues({ ...values, label: value.currentKey }),
//             label: "Label",
//             componentName: "select",
//             isRequired: true,
//             list: ["Coming Soon", "Exclusive", "Last Pairs", "New in"],
//         },
//         {
//             name: "price",
//             onChange: (e) => setValues({ ...values, price: e.target.value }),
//             label: "Price",
//             componentName: "input",
//             isRequired: true,
//         },
//         {
//             name: "color",
//             onChange: (e) => {
//                 const colorQuantities = e.target.value.split(",");
//                 const colorsWithQuantities = {};
//                 colorQuantities.forEach(item => {
//                     const [color, quantity] = item.trim().split("-");
//                     colorsWithQuantities[color.trim()] = parseInt(quantity.trim());
//                 });
//                 setValues({ ...values, color: colorsWithQuantities });
//             },
//             label: "Color",
//             componentName: "input",
//             isRequired: true,
//         },
//         {
//             name: "manufacturer",
//             onChange: (e) => setValues({ ...values, manufacturer: e.target.value }),
//             label: "Manufacturer",
//             componentName: "input",
//             isRequired: true,
//         },
//         {
//             name: "releaseDate",
//             onChange: (e) => setValues({ ...values, releaseDate: e.target.value }),
//             label: "ReleaseDate",
//             componentName: "Date",
//             isRequired: true,
//         },
//     ];

//     return (

//         <>
//             <Modal
//                 size='3xl'
//                 isOpen={isOpen}
//                 onClose={onClose}
//                 className="bg-black"
//                 backdrop="blur"
//             >
//                 <ModalContent>
//                     {(onClose) => (
//                         <>
//                             <ModalHeader className="flex flex-col gap-1">Add Sneaker</ModalHeader>
//                             <ModalBody>
//                                 <form onSubmit={onSubmit}>
//                                     <div className="grid grid-cols-2 gap-4 mt-4">
//                                         {FIELDS.map((data, i) => {
//                                             if (data?.componentName === "autocomplete")
//                                                 return (
//                                                     <Autocomplete
//                                                         key={i}
//                                                         label={data.label}
//                                                         className="z-10"
//                                                         radius="sm"
//                                                         isLoading={loading}
//                                                         onInputChange={data.onInputChange}
//                                                         onSelectionChange={data.onSelectionChange}
//                                                         items={data.list} 
//                                                         inputValue={data.inputValue}
//                                                         description={data.defaultValue}
//                                                     >
//                                                         {(item) => (
//                                                             <AutocompleteItem
//                                                                 textValue={item.name}
//                                                                 description={item.address}
//                                                                 key={item._id}
//                                                             >
//                                                                 {item.name}
//                                                             </AutocompleteItem>
//                                                         )}
//                                                     </Autocomplete>
//                                                 );

//                                             if (data?.componentName === "select")
//                                                 return (
//                                                     <Select
//                                                         isRequired={data?.required}
//                                                         key={i}
//                                                         label={data?.label}
//                                                         className=""
//                                                         radius="sm"
//                                                         onSelectionChange={data?.onChange}
//                                                         defaultSelectedKeys={
//                                                             data?.defaultValue && [data?.defaultValue]
//                                                         }
//                                                     >
//                                                         {data?.list?.map((v) => (
//                                                             <SelectItem key={v} value={v} className="bg-black rounded">
//                                                                 {v}
//                                                             </SelectItem>
//                                                         ))}
//                                                     </Select>
//                                                 );
//                                             return (
//                                                 <Input
//                                                     defaultValue={data?.defaultValue}
//                                                     className=""
//                                                     key={i}
//                                                     radius="sm"
//                                                     {...data}
//                                                 />
//                                             );
//                                         })}
//                                     </div>
//                                     <div className="flex justify-between my-6">
//                                         <div className="">
//                                             <p className="text-primary text-sm">Upload images</p>
//                                             <input
//                                                 radius="sm"
//                                                 onChange={getImage}
//                                                 className="text-xs inline-block"
//                                                 name="images"
//                                                 type="file"
//                                                 multiple
//                                             />
//                                         </div>
//                                     </div>
//                                 </form>
//                             </ModalBody>
//                             <ModalFooter>
//                                 <Button color="danger" variant="light" onPress={onClose} onClick={onClear}>
//                                     Close
//                                 </Button>
//                                 <Button color="primary" onPress={onClose} onClick={onSubmit}>
//                                     Submit
//                                 </Button>
//                             </ModalFooter>
//                         </>
//                     )}
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }



import React from 'react'

export default function addSneakers() {
  return (
    <div>addSneakers</div>
  )
}
