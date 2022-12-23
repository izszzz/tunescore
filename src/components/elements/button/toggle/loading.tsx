import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface ToggleLoadingButtonProps
  extends Omit<LoadingButtonProps, "onClick" | "defaultValue" | "variant"> {
  label: (value: boolean) => string;
  variant: (value: boolean) => "outlined" | "contained";
  defaultValue: boolean;
  onClick: (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
const ToggleLoadingButton = ({
  label,
  variant,
  defaultValue,
  onClick,
  ...props
}: ToggleLoadingButtonProps) => {
  const [bool, setBool] = useState(defaultValue);
  useEffect(() => {
    setBool(defaultValue);
  }, [defaultValue]);
  return (
    <LoadingButton
      {...props}
      variant={variant(bool)}
      onClick={() => onClick(bool, setBool)}
    >
      {label(bool)}
    </LoadingButton>
  );
};
export default ToggleLoadingButton;
