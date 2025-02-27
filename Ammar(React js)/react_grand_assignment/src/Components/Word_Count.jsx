import React, { useState } from 'react'

export default function Word_Count() {
    let [txt, setTxt] = useState("");
    let [lc, setLC] = useState(0);
    let [wc, setWC] = useState(0);
    let [capital, setCapital] = useState(0);
    let [small, setSmall] = useState(0);
    let [digits, setDigits] = useState(0);
    let [dish, setDish] = useState([]);


    function wordCount(e) {
       let text_value = e.target.value;
       setTxt(text_value);
       let spaceCount = text_value.split(/\s+/);
       let cap_count = text_value.split("").filter((a)=>a>="A"&&a<="Z");
       setCapital(cap_count.length);
       let small_count = text_value.split("").filter((a)=>a>="a"&&a<="z");
       setSmall(small_count.length);
       let digit_count = text_value.split("").filter((a)=>a>=0&&a<=9);
       setDigits(digit_count.length);
       setLC(text_value.length);
       setWC(spaceCount.length);


    }

    function get_checBox_value(e) {
           let {value, checked} = e.target;
           if (checked) {
            setDish([...dish, value]);
            } else {
                setDish((old_dish)=>old_dish.filter((a)=>a!==value));
           }
    }

  return (
    <div className='container'>
        <br />
        <h1>Word Count</h1>
        <br />
        <p>Enter Your Msg:</p>
        <textarea className='form-control my-3' placeholder='Enter Your Msg Here' value={txt} onChange={wordCount}></textarea>
        <br />
        <br />

        {
            <div>
                <h4><strong>Your Msg: &nbsp;</strong> {txt}</h4>
                <hr />
                <h4><strong>Letter Count: &nbsp;</strong>{lc}</h4>
                <h4><strong>Word Count: &nbsp;</strong>{wc}</h4>
                <h4><strong>upper_Case Count: &nbsp;</strong>{capital}</h4>
                <h4><strong>lower_Case Count: &nbsp;</strong>{small}</h4>
                <h4><strong>Digit Count: &nbsp;</strong>{digits}</h4>
            </div>
        }

        <hr />
        
        <h1>Check Box</h1>
        <br />
        <input type="checkbox" name='dish' value="Biryani" onChange={get_checBox_value} />&nbsp;Biryani&nbsp;&nbsp;
        <input type="checkbox" name='dish' value="BBQ" onChange={get_checBox_value} />&nbsp;BBQ&nbsp;&nbsp;
        <input type="checkbox" name='dish' value="Pizza" onChange={get_checBox_value} />&nbsp;Pizza&nbsp;&nbsp;
        <input type="checkbox" name='dish' value="Karhai" onChange={get_checBox_value} />&nbsp;Karhai&nbsp;&nbsp;
        <input type="checkbox" name='dish' value="Mandi" onChange={get_checBox_value} />&nbsp;Mandi&nbsp;&nbsp;
        <br />
        <br />
        <h3>
            {dish.join(", ")}
        </h3>


    </div>
  )
}
