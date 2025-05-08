import { useField } from "formik";

export const InputText = ({
  label = "",
  required = true,
  className = true,
  onChange = null,
  refVal = null,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
        autoComplete="off"
        ref={refVal}
      />
      {label !== "" && (
        <label htmlFor={props.id || props.name}>
          {required && <span className="text-alert">*</span>}
          {label}
        </label>
      )}

      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputTextArea = ({
  label = "",
  required = true,
  className = true,
  onChange = null,
  refVal = null,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
        {...field}
        {...props}
        className={
          meta.touched && meta.error ? `error-show ${className}` : className
        }
        onChange={(e) => {
          onChange !== null && onChange(e);
          field.onChange(e);
        }}
        autoComplete="off"
        ref={refVal}
      />
      {label !== "" && (
        <label htmlFor={props.id || props.name}>
          {required && <span className="text-alert">*</span>}
          {label}
        </label>
      )}

      {meta.touched && meta.error ? (
        <span className="error-show">{meta.error}</span>
      ) : null}
    </>
  );
};
