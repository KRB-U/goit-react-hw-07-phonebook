export const toastConfig = {
  position: 'top-center',
  reverseOrder: false,
  gutter: 8,
  containerClassName: '',
  containerStyle: {},
  toastOptions: {
    // Define default options
    className: '',
    duration: 600,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 600,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  },
};
