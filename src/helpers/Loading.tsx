import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const Loading = ({ path = "login" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold text-gray-600 mb-4">
        Redirecting in {count} seconds
      </h1>
      <Spinner />
    </div>
  );
};

export default Loading;