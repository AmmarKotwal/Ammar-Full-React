import React, {useState} from 'react'

export default function TempCon() {
    let [cel, setCel] = useState(0);
    let [kel, setKel] = useState(0);
    let [fah, setFah] = useState(0);
    let [msg, setMsg] = useState("");
    let [Img, setImg] = useState("");


    function temp() {
        
        cel = parseFloat(prompt("Enter Temperature"))
        setCel(cel);

        kel = cel + 273.15
        setKel(kel);
        fah = (cel * 1.8) + 32
        setFah(fah);

        if (cel > 40) {
            setMsg("Heat Stroke")
            setImg("https://c8.alamy.com/comp/2JH9PNE/heat-stroke-or-sunstroke-from-hot-summer-sun-icon-tired-sweat-boy-with-heatstroke-headache-feel-thirsty-dizziness-on-warm-sunny-day-thermal-overh-2JH9PNE.jpg") 
        }
        else if(cel > 30) {
            setMsg("Very Hot")
            setImg("https://static.vecteezy.com/system/resources/previews/011/665/201/non_2x/handsome-young-man-suffering-from-heat-wave-stoke-in-very-hot-weather-temperature-because-of-global-climate-change-vector.jpg") 



        }
        else if(cel > 25) {
            setMsg("Mildy Weather") 
            setImg("https://www.shutterstock.com/image-illustration/sun-cloud-260nw-122323663.jpg") 
            
        }
        else if(cel > 20) {
            setMsg("Cloudy") 
            setImg("https://cdn-icons-png.flaticon.com/512/3982/3982153.png") 
            
        }
        else if(cel > 10) {
            setMsg("Winter Started") 
            setImg("https://i.pinimg.com/736x/92/c3/46/92c3466282194623a1cee2087da7952f.jpg") 
            
        }
        else if(cel > 5) {
            setMsg("Too Cold") 
            setImg("https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=170667a&w=is&k=20&c=P8fa2zo7_Shwqger9QDZ9QqbnrApj0TjWYqaRs-xm_E=") 
            
        }
        else {
            setMsg("Invalid") 
            setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s") 
        }
    }



   
  return (
    <div>
        <br />
        <table className='table table-hover table-striped-rows table-info'>
            <thead>
            <tr className='text-center align-middle'>
                <th>Temperature In Celcius</th>
                <th>Temperature In kelvin</th>
                <th>Temperature In Fahrenheit</th>
                <th>Message</th>
                <th>image</th>
            </tr>
            </thead>
            <tbody>
            <tr className='text-center align-middle'>
                <td>{cel.toFixed(2)}</td>
                <td>{kel.toFixed(2)}</td>
                <td>{fah.toFixed(2)}</td>
                <td>{msg}</td>
                <td><img src={Img} alt="" w-100 height="50" /></td>
            </tr>
            </tbody>
        </table>

    <br />
    <br />
    <button className="btn btn-outline-info" type='submit' onClick={temp}>Temperature Converter</button>
    </div>
  )
}
