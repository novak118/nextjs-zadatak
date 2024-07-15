export const getImageSrc = (articles) => {
  switch (articles) {
    case 'NEWS':
      return '/sport.jpg';
    case 'INSPARATION':
      return '/tehnologija.jpg';
    case 'DESIGN TRENDS':
      return '/vesti.jpg';
  }
};
