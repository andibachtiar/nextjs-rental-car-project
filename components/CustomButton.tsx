"use client";

import React from "react";
import Image from "next/image";

type CustomButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return <button {...rest}>{children}</button>;
};

export default CustomButton;
