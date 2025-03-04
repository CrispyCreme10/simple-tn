import { FC } from "react";
import { InputProps } from "./types";
import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "./InputErrorMessage";

export const NumberInput: FC<InputProps> = ({
  name,
  label,
  errors,
  placeholder,
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          type="number"
          min={0}
          {...register(name, {
            setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
          })}
          placeholder={placeholder}
          className={`form__input ${
            Object.prototype.hasOwnProperty.call(errors, name) &&
            "border-red-500"
          } `}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
