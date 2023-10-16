import React from 'react';

const CustomizableImage = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

const ImageContainer = ({ children }) => {
  const imageSrc = 'https://www.fonstola.ru/pic/201409/400x300/fonstola.ru_148722.jpg?1453880234';
  const imageAlt = 'Customizable Image';
  const imageStyles = {
    width: '1000px',
    height: '1000px',
  };

  return (
    <div className="image-container">
      {children({ src: imageSrc, alt: imageAlt, style: imageStyles })}
    </div>
  );
};

// Пример использования
const App = () => {
  return (
    <div>
      <ImageContainer>
        {(imageProps) => <CustomizableImage {...imageProps} />}
      </ImageContainer>
    </div>
  );
};

export default App;
