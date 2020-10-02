import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  incrementY } from "../Actions";

export const XComponent = () => {
  const { x } = useSelector((state) => state);
  const dispatch = useDispatch();
    return (
      <div>
        <p>B, x = {x}</p>
        <button onClick={() => dispatch(incrementY())}>Increment Y</button>
      </div>
    );
}
