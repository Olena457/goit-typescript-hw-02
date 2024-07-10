// import Modal from 'react-modal';
// import css from './ImageModal.module.css';
// import { UnsplashPhoto } from './../../App/App.types';

// Modal.setAppElement('#root');

// _____________________________
// import { FC } from 'react';
// import Modal from 'react-modal';
// import css from './ImageModal.module.css';
// import { UnsplashPhoto } from '../../App/App.types';

//  interface ImageModalProps {
//     item: UnsplashPhoto;
//     isOpen: boolean;
//     onClose: () => void;
//   }

// export const ImageModal: FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
//    const { urls, user, likes, description, alt_description } = item;

//   const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

//   return (
//     <>
//     <Modal
//       className={`${css.modalContainer} ${css.modalImg}`}
//       isOpen={isOpen}
//       ariaHideApp={false}
//       contentLabel="Modal Image"
//       closeTimeoutMS={300}
//       shouldCloseOnEsc={true}
//       style={customStyles}
//       onRequestClose={() => {
//         onClose();
//       }
//       }
//       >

//           <img
//             className={css.modalImg}
//             src={urls.regular}
//             alt={alt_description}

//           />
//           <div>
//             <ul className={css.imgDescription}>

//               <li>
//                 <p>{item.description || 'No description'}</p>
//               </li>
//               <li>
//                 <p>By: {item.user.name}</p>
//               </li>
//               <li>
//                 <p>Likes: {item.likes}</p>
//               </li>
//             </ul>
//           </div>
//             </Modal>
//         </>
//       )}
//   )
// }

// export default ImageModal;
import { FC } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { UnsplashPhoto } from '../../App/App.types';

// Modal.setAppElement('#root');

interface ImageModalProps {
  item: UnsplashPhoto;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
  const { urls, user, likes, description, alt_description } = item;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      className={`${css.modalContainer} ${css.modalImg}`}
      isOpen={isOpen}
      ariaHideApp={false}
      contentLabel="Modal Image"
      closeTimeoutMS={300}
      shouldCloseOnEsc={true}
      style={customStyles}
      onRequestClose={onClose}
    >
      <img
        className={css.modalImg}
        src={urls.regular}
        alt={alt_description}
        onClick={onClose}
      />
      <div>
        <ul className={css.imgDescription}>
          <li>
            <p>{description || 'No description'}</p>
          </li>
          <li>
            <p>By: {user.name}</p>
          </li>
          <li>
            <p>Likes: {likes}</p>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
