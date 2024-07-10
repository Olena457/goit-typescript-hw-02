import { Toaster } from 'react-hot-toast';

export default function ErrorMessage() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: 'indianred',
          color: 'black',
        },
        duration: 4000,
      }}
    />
  );
}
