import React, { ChangeEvent } from "react";
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  RegisterOptions,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextField, { TextFieldProps } from '@mui/material/TextField';

export type ControlTextFieldProps = TextFieldProps & {
  name: string;
  errors?: DeepMap<FieldValues, FieldError>;
  rules?: RegisterOptions;
};

function ControlTextField<T>({
  name,
  defaultValue,
  onChange,
  onKeyPress,
  // react-hook-form props
  errors,
  control,
  rules,
  ...props
}: UseControllerProps<T> & ControlTextFieldProps) {
  const {
    field: { ref, value, onChange: onChangeController },
    fieldState: { invalid },
  } = useController<T>({ name, control, rules, defaultValue });
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (onChange) onChange(e);
    onChangeController(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyPress) onKeyPress(e);
  };

  return (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      value={value as string}
      inputRef={ref}
      error={invalid}
      helperText={errors && <ErrorMessage errors={errors} name={name} />}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

ControlTextField.defaultProps = {
  rules: {},
};

export default ControlTextField;