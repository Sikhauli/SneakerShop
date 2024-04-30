import { Grid, Card, Text, Button, CardBody } from "@nextui-org/react";
import sneakers from "../../assets/sneaker.json"


export default function Deals() {
 
    return (
        <Card className='mt-8'>
            <Card.Header>
                <h1 className="text-7xl leading-tight font-bold text-start uppercase">Deal of the day</h1>
            </Card.Header>
            <div className='w-screen h-auto flex align-center justify-content mt-6'>
                <CardBody className="flex flex-row p-12 justify-center">
                    <Grid.Container gap={2} justify="center">
                        {sneakers.map((sneaker, index) => (
                            <Grid key={index} xs={4}>
                                <div className={`relative `}>
                                    <Card css={{ w: "100%", p: "6", mt: "6" }}>
                                        <Card.Body>
                                            <Text className='text-xs font-serif absolute top-1 left-1 p-2 bg-purple-600'>New Arrival</Text>
                                            <img src={sneaker.image} alt={sneaker.name} className="w-[80%] h-32" />
                                            <p className='mt-2 font-serif'>{sneaker.name}</p>
                                            <p className='mt-2 font-serif'>{sneaker.price}</p>
                                            <Button className='w-full font-serif mt-2 rounded'>Add to cart</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Grid>
                        ))}
                    </Grid.Container>
                </CardBody>
            </div>
        </Card>
    );
}
