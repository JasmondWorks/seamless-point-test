import React from "react";
import Button, { ButtonVariant } from "./Button";
import clsx from "clsx";
import Loader from "./Loader";

interface Props {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: any;
  isReversed?: boolean;
  isLoading?: boolean;
}

export default function ButtonFormSubmit({
  text = "I UNDERSTAND",
  className = "",
  onClick,
  icon,
  isReversed,
  isLoading,
}: Props) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      onClick={onClick}
      text={isLoading ? <Loader /> : text}
      className={clsx("py-10 !h-14 items-center font-normal w-full", className)}
      isRoundedLarge
      variant={ButtonVariant.fill}
      isReversed={isReversed}
      icon={!isLoading && icon}
    />
  );
}
