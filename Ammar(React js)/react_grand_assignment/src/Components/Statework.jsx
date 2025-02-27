import React, { useState } from 'react'

export default function 
Statework() {
    let [converted_weight, setconverted_weight] = useState(0);
   function weight() {
    
    let kg = parseFloat(prompt("Enter Your Weight In Kg Here!"))
    let given_weight = prompt("Select Weight In Any Unit You Want To Convert Here!\n1\tgram\n2\tmilligram\n3\tton\n4\tpound")

    switch (given_weight) {
        case "1":
           converted_weight =  kg * 1000
           break;
           case "2":
            converted_weight =  kg * 1000000
            break;
            case "3":
                converted_weight =  kg / 907.2
                break;
                case "4":
                    converted_weight =  kg * 2.20462
                    break;
                    default:
                        console.log("Invalid Input");                    
    }
    // console.log(`${kg} => ${converted_weight.toFixed(2)}`);  
    setconverted_weight(converted_weight);

   } 
  return (
    <div>
        <br />
        <button className='btn btn-warning' onClick={weight} type="submit">Weight Converter</button>
        <br />
        <br />
        <p>Converted Weight: {converted_weight.toFixed(2)}</p>
    </div>
  );
}
