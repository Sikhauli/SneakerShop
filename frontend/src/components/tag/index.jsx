import React, { useState } from "react";
import { Chip, Button, Input, Card, Divider } from "@nextui-org/react";

function ColorTag({ color, quantity }) {
    return (
        <Chip variant="flat" color="primary" className="rounded p-4 bg-blue-500 text-black">
            {color} ({quantity})
        </Chip>
    );
}

export default function ColorTagList({ onColorTagsChange }) {
    const [colorTags, setColorTags] = useState([]);

    const addColorTag = () => {
        setColorTags([...colorTags, { name: "", quantity: "" }]);
    };

    console.log("addColorTag :", colorTags)

    const handleChange = (index, field, value) => {
        const updatedColorTags = [...colorTags];
        updatedColorTags[index][field] = value;
        setColorTags(updatedColorTags);
        onColorTagsChange(updatedColorTags); 

    };

    return (
        <Card className="w-[50%] mt-4 p-4 h-fit">
            {colorTags.map((tag, index) => (
                <div key={index} className="flex mb-2 gap-2">
                    <Input
                        classNames={{
                            base: " h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 rounded",
                            font: "serif",
                        }}
                        type="text"
                        placeholder="Color"
                        value={tag.color}
                        onChange={(e) => handleChange(index, "name", e.target.value)}
                        className="w-60 py-1 rounded"
                    />
                    <Input
                        classNames={{
                            base: " h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 rounded",
                            font: "serif",
                        }}
                        type="number"
                        placeholder="Quantity"
                        value={tag.quantity}
                        onChange={(e) => handleChange(index, "quantity", e.target.value)}
                        className="w-[6rem] py-1 rounded"
                    />
                </div>
            ))}
            <Button variant="secondary" onClick={addColorTag} className='rounded px-12 mt-2 bg-blue-500 border font-serif'>
                Add Color
            </Button>
        </Card>
    );
}







