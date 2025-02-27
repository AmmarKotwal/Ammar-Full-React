import React from 'react'

export default function Events() {

  function cal() {

    var quan = parseFloat(prompt("Enter Quantity"))
var price = parseFloat(prompt("Enter Price"))
var total = quan*price
console.log(`Your Total Is: ${total}`)
if (total >= 5000) {
  document.write("Tax Has Been Applied")
}else {
  document.write("No Tax Has Been Applied")
}
  }

 function findScore() {
  var tScore = 75
  var Oscore = parseFloat(prompt("Enter Your Test Score"))
  var per = Oscore/tScore*100
  console.log(`Your Score Is: ${per.toFixed(1)}%`)

  if (Oscore > tScore) {
    alert("Chal Bewakoof Nikal")
  }else {
    alert("Chal Theek Hai")
  }
  
 } 

  return (
    <div>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <button class="btn btn-primary" type='submit' onClick={()=>{alert("Pakistan")}}>First Country</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button class="btn btn-primary" type='submit' onClick={()=>{alert("Saudi-Arabia")}}>Second Country</button>
      </div>
    </div>
  </div>
</div>
<br />
<br />
<br />

<button class="btn btn-success" onClick={cal} type="submit">Calculation</button><br />
<br />

<button class="btn btn-success" onClick={findScore} type="submit">Find Score</button>


    </div>
  )
}
