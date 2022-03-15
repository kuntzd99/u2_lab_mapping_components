const Contact = (props) => {
  return (
    <li className="contact" id={props.key}>
      <img src={props.thumbnail} alt="headshot"></img>
      <div className="info">
        <h3>{props.first + ' ' + props.last}</h3>
        <h5>Home: {props.phone}</h5>
        <h5>Mobile: {props.cell}</h5>
      </div>
      <hr></hr>
    </li>
  )
}

export default Contact
