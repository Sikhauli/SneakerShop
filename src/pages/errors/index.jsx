import { useNavigate, useRouteError } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    const errorMsg = error?.response?.data?.toLowerCase();
    const loggedOut =
      errorMsg?.includes("access denied") ||
      errorMsg?.includes("session expired");
    if (errorMsg.includes("access denied") && error?.response?.status === 402)
      navigate("/auth/signin");
  }, []);

  return (
    <div
      className={`bg-background flex h-screen flex-col items-center justify-center`}
    >
      <h1 className="mb-2 text-2xl font-semibold">Oops!</h1>
      <p className="mb-8">Sorry, an unexpected error has occurred.</p>
      <div className={`flex items-center justify-center text-center`}>
        <div className={`mr-4 border-r text-4xl font-semibold `}>
          <p className={`mr-4`}>{error?.status}</p>
        </div>

        <p>{error?.statusText || error?.message}.</p>
      </div>

      <p className=" text-red-600">{error?.response?.data}</p>

      <Button
        onClick={() => navigate(-1)}
        color="primary"
        className=" px-4 my-4 rounded-lg "
      >
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
