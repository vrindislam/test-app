import arrowRight from '../../assets/arrow-right.svg';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={arrowRight}
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
     alt='arrow-right'/>
  );
}

export default NextArrow;