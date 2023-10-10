"use client";
import { useParams } from "next/navigation";
import React from "react";

const SingleProperty = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h3>id is {`${params.id}`}</h3>
    </div>
  );
};

export default SingleProperty;
