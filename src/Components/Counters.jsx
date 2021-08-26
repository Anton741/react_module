import Counter from './counter.jsx'


const Counters = () => {
  const usrs = [
    { name: 'Anton', age: '23', id: 1 },
    { name: 'Artur', age: '23' , id: 2},
    { name: 'Vlad', age: '22' , id: 3},
  ];
  return ( 
    <>
    {usrs.map((user) => {
      return <Counter name ={user.name} age = {user.age} key = {user.id}>My children</Counter>
    } )}
    <h1>The end</h1>
  </>
  );
}


export default Counters;