import BGImage from './BGImage.jpg'


import React from 'react'

function HomePage() {
  return (
    <div>
       <br></br><br></br><br></br>
        <img className='HomePage' Style="padding:10px;margin-left: 800px;" src={BGImage}  alt="No background" /><br></br><br></br><br></br>
        <h1 Style="color:Solidblack;padding-left:1000px"><i>ElectricityBillPaymentApp</i></h1>
        <h2 Style="color:lightgreen;padding-left:980px"><i>For service contact - 044-26570492</i> </h2><br></br><br></br>
        <h2 Style="color:lightblue;padding-left:900px"><i>"Save your Time By Paying Your Bill Online"</i></h2>

    </div>
  )
}

export default HomePage
