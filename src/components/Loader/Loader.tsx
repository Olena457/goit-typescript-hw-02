// import { Oval } from 'react-loader-spinner';
// import css from './Loader.module.css';

// const Loader = () => (
//   <div className={`${css.loader} ${css.centered} ${css.popup}`}>
//     <Oval color="#008000" height={70} width={70} />
//   </div>
// );

// export default Loader;
import { ClimbingBoxLoader } from 'react-spinners';

import css from './Loader.module.css';
// import Loader from './Loader';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <ClimbingBoxLoader color="#36bed6" />
    </div>
  );
};
