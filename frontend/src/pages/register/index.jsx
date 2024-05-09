
//
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

//icons
import { RiDoubleQuotesL } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

//
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slices/loadingSlice";
import { setUser } from "../../redux/slices/userSlice";
import { useSnackbar } from "notistack";

export default function Register() {

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ email: "", password: "", name: "" });

  const navigate = useNavigate();
  const navToHome = () => navigate("/");


  const onChange = (e) => {
    e?.preventDefault();

    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const submit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    API.post(AUTH_ENDPOINTS.register, userData)
      .then((response) => {
        dispatch(setUser(response.data.user));
        enqueueSnackbar("Successfully User Created!", {
          variant: "success",
        });
        navToHome();
      })
      .catch((error) =>
        enqueueSnackbar(getAxiosError(error), {
          variant: "error",
        })
      )
      .finally(() => dispatch(hideLoading()));
  };




  return (
    <div className="grid grid-cols-[44rem_1fr] h-screen">
      {/* left */}

      <Card className="m-4 bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=400')]">
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
            <p className="leading-7 font-serif">
              We believe in prioritising the needs of our members and their
              families during a difficult time of bereavement. We take pride in
              providing the best funeral products and services.
            </p>
            <p className="mt-4 font-serif">&#45;Sneaker<span className="text-purple-500">Freak</span></p>
          </div>
        </CardFooter>
      </Card>


      {/* right */}
      <div className="p-2 flex flex-col justify-center ">
        <div className="mb-6">
          <h1 className="text-4xl font-semibold text-center mb-2 font-serif">
            Create an Account 🚀
          </h1>
          <p className="text-sm text-center text-default-500 font-serif font-serif">
            Welcome! Let&apos;s get started on your registration.
            Join us to explore a world of opportunities and services. Let&apos;s
            make this journey together!
          </p>
        </div>

        <form onSubmit={submit} className=" flex flex-col justify-center item-center">
          <Input
            type="name"
            labelPlacement="outside"
            label="Username"
            name="name"
            value={userData.name}
            placeholder="Enter Username"
            className=" w-[98%] p-3 rounded font-arias"
            size="lg"
            radius="sm"
            variant="bordered"
            onChange={onChange}
          />

          <Input
            type="email"
            labelPlacement="outside"
            label="Email"
            name="email"
            value={userData.email}
            placeholder="Enter Email"
            className="w-[98%] p-3 rounded font-arias"
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
            placeholder="Enter Password"
            className="w-[98%] p-3 rounded "
            size="lg"
            radius="sm"
            variant="bordered"
            onChange={onChange}
          />

          <Button
            type="submit"
            color="primary"
            size="lg"
            radius="sm"
            className="mt-4 w-[99%] font-serif"
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
            Already have an account?
            <Link to="/login" className="ml-1 text-primary underline font-serif">Sign up</Link>
          </p>
        </div>

      </div>

    </div>
  );
}
