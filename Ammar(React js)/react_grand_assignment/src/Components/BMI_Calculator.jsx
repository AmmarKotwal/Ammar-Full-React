import React, {useState} from 'react'

export default function BMI_Calculator() {

    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);
    let [bmi, setBMI] = useState(0);
    let [msg, setMsg] = useState("");
    let [img, setImg] = useState("");
  
    function calculateBMI() {
      weight = parseFloat(prompt("Enter Weight in kg:"));
      height = parseFloat(prompt("Enter Height in meters:"));
  
      if (weight > 0 && height > 0) {
        setWeight(weight);
        setHeight(height);
  
        const calculatedBMI = weight / (height * height);
        setBMI(calculatedBMI);
  
        if (calculatedBMI < 18.5) {
          setMsg("Underweight");
          setImg("https://cdn-icons-png.flaticon.com/512/1880/1880850.png");
        } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
          setMsg("Healthy weight");
          setImg("https://cdn-icons-png.flaticon.com/512/3209/3209881.png");
        } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
          setMsg("Overweight but not obese");
          setImg("https://cdn-icons-png.flaticon.com/512/8336/8336660.png");
        } else if (calculatedBMI >= 30 && calculatedBMI <= 34.9) {
          setMsg("Obese class");
          setImg("https://cdn-icons-png.flaticon.com/512/4713/4713026.png");
        } else {
          setMsg("Invalid");
          setImg("https://cdn-icons-png.flaticon.com/512/1828/1828665.png");
        }
      } else {
        setMsg("Invalid input");
        setImg("https://cdn-icons-png.flaticon.com/512/1828/1828665.png");
      }
    }

  return (
     <div>
      <br />
      <table className="table table-hover table-striped-rows table-success">
        <thead>
          <tr className='text-center align-middle'>
            <th>Weight (kg)</th>
            <th>Height (m)</th>
            <th>BMI</th>
            <th>Classification</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-center align-middle'>
            <td>{weight.toFixed(2)}</td>
            <td>{height.toFixed(2)}</td>
            <td>{bmi.toFixed(2)}</td>
            <td>{msg}</td>
            <td>
              <img src={img} alt="" width="50" height="50" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>
    </div>

  )
}
