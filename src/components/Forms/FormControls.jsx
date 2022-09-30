import classnames from 'classnames';
import styles from './FormController.css';

export function FormController({ label, children }) {
  const className = classnames(styles.FormController, styles.LabelText);
  return (
    <label className={className}>
      {label}
      {children}
    </label>
  );
}
export function InputController({ label, ...rest }) {

  return (
    <FormController label={label}>
      <input {...rest} />
    </FormController>
  );
}
