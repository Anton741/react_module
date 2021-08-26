import './counter.css';


const Counter = (props) => { 

  const startCount = () => {
    return props.value === 0 ? 'Ноль' : props.value;
  };
  

  const getBageClass = () => {
    let classes = 'mx-3 badge bg-';
    return classes += props.value === 0 ? 'danger' : 'primary'
  }

  

  return (
    <div className="mb-9">
      <br></br>
      <span className={getBageClass()}>{startCount()}</span>
      <button className="btn btn-secondary me-2 btn-sm" onClick={() => props.onIncrement(props.id)}>
        Increment
      </button>
      <button className="btn btn-secondary btn-sm" onClick= {() => props.onDecrement(props.id)}>
        Decrement
      </button>
      <button className = "btn btn-danger btn-sm mx-2" onClick = {() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
};

export default Counter;
