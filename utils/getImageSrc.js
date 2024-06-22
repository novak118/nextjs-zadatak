export const getImageSrc = (articles) => {
    switch(articles){
        case 'NEWS':
           return '/images/sport.jpg';
        case 'INSPARATION':
            return '/images/tehnologija.jpg';
        case 'DESIGN TRENDS':
            return '/images/vesti.jpg';
    }
 }