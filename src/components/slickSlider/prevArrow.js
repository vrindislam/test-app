import arrowLeft from '../../assets/arrow-left.svg';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrowLeft}
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      alt='arrow-left'
    />
  );
}

export default PrevArrow