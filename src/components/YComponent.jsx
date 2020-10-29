import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incrementX } from "../Actions";

export const YComponent = () => {
  const { y } = useSelector((state) => state);
  const dispatch = useDispatch();
    return (
      <div>
        <p>B, y = {y}</p>
        <button onClick={() => dispatch(incrementX())}>Increment Y</button>
      </div>
    );
}
