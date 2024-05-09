import React from "react";
import { CheckboxGroup, Checkbox, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function SizeSelection({ sizes, onChange }) {
    const [selectedSizes, setSelectedSizes] = React.useState([]);

    const handleSizeChange = (newSizes) => {
        setSelectedSizes(newSizes);
        onChange(newSizes);
    };

    return (
      <> 
        <Card className="my-4 w-[50%] justify-center items-center">
            <CardHeader className="items-center">
                <p className="w-full font-serif font-normal text-center">Select Available Sizes</p>
            </CardHeader>
            <CheckboxGroup
                className="gap-2 p-4 rounded w-fit"
                // label="Select sizes"
                orientation="horizontal"
                value={selectedSizes}
                onChange={handleSizeChange}
            >
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                    <Checkbox key={size} value={size}>
                        {size}
                    </Checkbox>
                ))}
              </div>
            </CheckboxGroup>
        </Card>
      </>
    );
}
