import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetings/thunkMiddleware";

const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetings())
  }, [])

  const greeting = useSelector((state) => state.greeting);
  return <div>{greeting.greeting}</div>;
};

export default Greeting;
