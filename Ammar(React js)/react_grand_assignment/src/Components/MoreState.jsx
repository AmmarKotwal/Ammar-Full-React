import React,  {useState} from 'react'

export default function MoreState() {
    let [counter , setcounter] = useState(0)

    function inc() {
        return setcounter(counter + 1)
    }
    function dec() {
        return setcounter(counter - 1)
    }

    let msg = counter === 0 ? "Counter Is Empty" : counter < 10 ? "Counter Has Some Values" : "Counter Is Full";
    let img = counter === 0 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS1DoHot8X8TpQQElE1U7CNOvBxzyNdn1tA&s" : counter < 10 ? "https://www.shutterstock.com/image-vector/blue-glass-jar-half-full-260nw-2565601461.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-r1QDYxMVpayM0B2_tKSGdGTNBkK9gdDBg&s";
  return (
    <div>
        <br />
         <button className='btn btn-outline-primary' onClick={inc} type="submit" disabled={counter === 10}>Increment</button>
         &nbsp; &nbsp; {counter} &nbsp; &nbsp;
         <button className='btn btn-outline-danger' onClick={dec} type="submit" disabled={counter === 0}>Decrement</button>
<br />
<br />


    <p>{msg}</p>
    <br />
    <img src={img} alt="" />
    </div>
  )
}
