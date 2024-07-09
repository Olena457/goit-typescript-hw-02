import css from './ErrorMessage.module.css';

import { ErrorMessageProps } from '../../App/App.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div>
    <p className={css.error}>{message}</p>
  </div>
);
export default ErrorMessage;
