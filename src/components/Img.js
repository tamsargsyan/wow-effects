const Img = ({ src, alt, style, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      decoding='async'
      loading='lazy'
    />
  );
};

export default Img;
