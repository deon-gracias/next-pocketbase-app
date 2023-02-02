import { useField } from "formik";

interface InputType {
  label: string;
  name: string;
  type: string;
}

function Input(props: InputType) {
  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label htmlFor="email-input" className="label">
        {props.label}
      </label>
      <input className="input input-bordered" {...field} {...props} />
      <label htmlFor="email-input" className="label">
        {meta.touched && meta.error ? (
          <span className="label-text-alt text-error">{meta.error}</span>
        ) : null}
      </label>
    </div>
  );
}

export default Input;
