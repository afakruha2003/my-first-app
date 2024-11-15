const Card = (props) => {
  const { title, image, description } = props; //destribiution
  return (
    <div className="cards">
      {/* {props.sehirobje.title} */}
      <div className="title">{title}</div>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
