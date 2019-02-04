import FontFaceObserver from 'fontfaceobserver';

const LoadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Rubik';
  link.rel = 'stylesheet';

  if (document.head) {
    document.head.appendChild(link);
  }

  const Rubik = new FontFaceObserver('Rubik');

  Promise.all([Rubik.load()])
    .then(() => {
      if (document.documentElement) {
        document.documentElement.classList.add('fonts-loaded');
      }
    })
    .catch(() => {
      if (document.documentElement) {
        document.documentElement.classList.add('fonts-failed');
      }
    });
};

export default LoadFonts;
