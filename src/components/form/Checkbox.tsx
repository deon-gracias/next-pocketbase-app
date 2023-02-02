import { useField } from "formik";
import { PropsWithChildren } from "react";

interface CheckboxType {
  label: string;
  name: string;
}

const Checkbox = ({ children, ...props }: PropsWithChildren<CheckboxType>) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.

  // Formik does this too! When you specify `type` to useField(), it will

  // return the correct bag of props for you -- a `checked` prop will be included

  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`

  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="form-control w-fit">
      <label className="label cursor-pointer justify-start gap-2">
        <input
          className="checkbox checkbox-primary"
          type="checkbox"
          {...field}
          {...props}
        />
        <span className="label-text">{props.label}</span>
      </label>
      <label htmlFor={props.name} className="label">
        {meta.touched && meta.error ? (
          <span className="label-text text-error">{meta.error}</span>
        ) : null}
      </label>
    </div>
  );
};

export default Checkbox;
