const Child = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.image} alt="" width="100" />
      <h2>{props.name}</h2>
      <p>Country: {props.country}</p>
      <p>Role: {props.role}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Child;
