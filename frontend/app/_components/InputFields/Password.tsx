"use client";

import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FormControl } from "../ui/form";
import { Input } from "../ui/input";

export default function Password({ field, props }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex bg-dark-400 items-center relative">
      <FormControl>
        <Input
          type={isPasswordVisible ? "text" : "password"}
          placeholder={isPasswordVisible ? "123abc<>?.!" : props.placeholder}
          {...field}
          className="shad-input pr-10"
        />
      </FormControl>
      <button
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
          setIsPasswordVisible((cur) => !cur);
        }}
        className="opacity-60 absolute right-0 px-3 cursor-pointer top-0 bottom-0"
      >
        {isPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
      </button>
    </div>
  );
}