import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaQuoteLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    Input,
} from "@nextui-org/react";

import { RiDoubleQuotesL } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slices/loadingSlice";
import { setUser } from "../../redux/slices/userSlice";
import { useSnackbar } from "notistack";

const Signin = () => {
    const currentUser = useSelector((state) => state.user.value);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState();

    const navigate = useNavigate();
    const navToRegister = () => navigate("/register");

    const onChange = (e) => {
        e?.preventDefault();

        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="grid grid-cols-[36rem_1fr]">
            {/* left */}
            <div className="p-12 min-h-screen flex flex-col justify-center ">
                <div className="mb-16">
                    <h1 className="text-4xl font-semibold text-center mb-2">
                        Welcome back 👋
                    </h1>
                    <p className="text-sm text-center text-default-500">
                        Welcome back! Let&#39;s make this chapter of your admin adventure a
                        remarkable success!
                    </p>
                </div>

                <form className="">
                    <Input
                        type="email"
                        labelPlacement="outside"
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        className="mb-12"
                        size="lg"
                        radius="sm"
                        variant="bordered"
                        onChange={onChange}
                    />

                    <Input
                        type="password"
                        labelPlacement="outside"
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        className=""
                        size="lg"
                        radius="sm"
                        variant="bordered"
                        onChange={onChange}
                    />
                    <div className="flex items-center justify-center mt-2">
                        <p className="text-xs cursor-pointer text-default-500 ml-auto">
                            Forgot password?
                            <Link href="forgot-password">
                                <text className="ml-1 text-primary underline">Reset it here</text>
                            </Link>
                        </p>
                    </div>

                    <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        radius="sm"
                        className="mt-4 w-full"
                    >
                        Sign in
                    </Button>
                </form>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-t border-default-100" />
                    <span className="mx-2 text-default-500 text-sm">OR</span>
                    <hr className="flex-grow border-t border-default-100" />
                </div>
                <div className="flex items-center justify-center">
                    <FcGoogle size={20} className='mr-6 cursor-pointer' />
                    <FaGithub size={20} className='cursor-pointer' />
                </div>

                <div className="flex items-center justify-center mt-6">
                    <p className="text-sm cursor-pointer text-default-500">
                        Dont have an account yet?
                        <Link to="/register" className="ml-1 text-primary underline">Sign up</Link>
                    </p>
                </div>
               
            </div>

            {/* right */}
            <Card className="m-4 bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/beautiful-asian-woman-sitting-desk-busy-office-working-laptop_1098-20208.jpg?w=740&t=st=1700233009~exp=1700233609~hmac=28604353c299607e2ae05074f65cb02a9be56ba6babed8a58f20fdfca8d5bea0')]">
                {/* <CardBody></CardBody> */}
                <CardFooter
                    style={{
                        backgroundImage:
                            "radial-gradient(circle farthest-side, transparent 10%, rgba(0,0,0,.65) 100%)",
                    }}
                    className="p-6 h-full text-white flex-col items-start justify-end"
                >
                    <div className="">
                        <RiDoubleQuotesL className="mb-3 text-4xl" />
                        <p className="leading-7">
                            We believe in prioritising the needs of our members and their
                            families during a difficult time of bereavement. We take pride in
                            providing the best funeral products and services.
                        </p>
                        <p className="mt-4">&#45;Royal Funerals Team</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Signin;
