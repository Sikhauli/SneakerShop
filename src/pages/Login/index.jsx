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
import {
    API,
    AUTH_ENDPOINTS,
    getAxiosError,
} from "../../helpers/constant";
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
    const [userData, setUserData] = useState({ email: "", password: "" });

    const navigate = useNavigate();
    const navToHome = () => navigate("/");


    const onChange = (e) => {
        e?.preventDefault();

        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // retrieve user data on page refresh
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            dispatch(setUser(JSON.parse(storedUser)));
        }
    }, [dispatch]);

    // retrieve user data on page refresh
    // useEffect(() => {
    //     if (!currentUser) {
    //         dispatch(showLoading());
    //         API.get(AUTH_ENDPOINTS.authenticate)
    //             .then((response) => {
    //                 const { password, ...temp } = response.data;
    //                 dispatch(setUser(temp));
    //             })
    //             .finally(() => dispatch(hideLoading()));
    //     }
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        dispatch(showLoading());
        API.post(AUTH_ENDPOINTS.login, userData)
            .then((response) => {
                const { password, ...temp } = response.data;
                dispatch(setUser(temp));
                localStorage.setItem('user', JSON.stringify(temp));
                navToHome();
            })
            .catch((error) =>
                enqueueSnackbar(getAxiosError(error), {
                    variant: "error",
                })
            )
            .finally(() => dispatch(hideLoading()));
    };

    // const submit = (e) => {
    //     e.preventDefault();
    //     dispatch(showLoading());
    //     API.post(AUTH_ENDPOINTS.login, userData)
    //         .then((response) => {
    //             dispatch(setUser(response.data));
    //             navToHome();
    //         })
    //         .catch((error) =>
    //             enqueueSnackbar(getAxiosError(error), {
    //                 variant: "error",
    //             })
    //         )
    //         .finally(() => dispatch(hideLoading()));
    // };


    return (
        <div className="grid grid-cols-[36rem_1fr]">
            {/* left */}
            <div className="p-12 min-h-screen flex flex-col justify-center ">
                <div className="mb-16">
                    <h1 className="text-4xl font-semibold text-center mb-2 font-serif">
                        Welcome back 👋
                    </h1>
                    <p className="text-sm text-center text-default-500 font-serif">
                        Welcome back! Let&#39;s make this chapter of your admin adventure a
                        remarkable success!
                    </p>
                </div>

                <form onSubmit={submit} className="">
                    <Input
                        type="email"
                        labelPlacement="outside"
                        label="Email"
                        name="email"
                        value={userData.email}
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
                        value={userData.password}
                        placeholder="Enter your password"
                        className=""
                        size="lg"
                        radius="sm"
                        variant="bordered"
                        onChange={onChange}
                    />
                    <div className="flex items-center justify-center mt-2">
                        <p className="text-xs cursor-pointer text-default-500 ml-auto font-serif">
                            Forgot password?
                            <Link href="forgot-password">
                                <text className="ml-1 text-primary underline font-serif">Reset it here</text>
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
                    <span className="mx-2 text-default-500 text-sm font-serif">OR</span>
                    <hr className="flex-grow border-t border-default-100" />
                </div>
                <div className="flex items-center justify-center">
                    <FcGoogle size={20} className='mr-6 cursor-pointer' />
                    <FaGithub size={20} className='cursor-pointer' />
                </div>

                <div className="flex items-center justify-center mt-6">
                    <p className="text-sm cursor-pointer text-default-500 font-serif">
                        Dont have an account yet?
                        <Link to="/register" className="ml-1 text-primary underline font-serif">Sign up</Link>
                    </p>
                </div>
               
            </div>

            {/* right */}
            <Card className="m-4 bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/beautiful-asian-woman-sitting-desk-busy-office-working-laptop_1098-20208.jpg?w=740&t=st=1700233009~exp=1700233609~hmac=28604353c299607e2ae05074f65cb02a9be56ba6babed8a58f20fdfca8d5bea0')]">
                <CardFooter
                    style={{
                        backgroundImage:
                            "radial-gradient(circle farthest-side, transparent 10%, rgba(0,0,0,.65) 100%)",
                    }}
                    className="p-6 h-full text-white flex-col items-start justify-end"
                >
                    <div className="">
                        <RiDoubleQuotesL className="mb-3 text-4xl" />
                        <p className="leading-7 font-serif">
                            We believe in prioritising the needs of our members and their
                            families during a difficult time of bereavement. We take pride in
                            providing the best funeral products and services.
                        </p>
                        <p className="mt-4 font-serif">&#45;Sneaker<span className="text-purple-500">Freak</span></p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Signin;
