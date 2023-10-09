import React from "react"
import ReactDOM from "react-dom"
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
function Page()  {
    <div>
        <h1>Reasons why I'm exited to be learning react.</h1> 
        <ol>
              <li>It's a new way of learning code for me.</li>
              <li>I enjoy that its interactive and repeats lessons in order to get you into what you need to do.</li>
              <li>It will help understand why we do certain things better and how as well.</li>
              <li>It will be benificial for me at the end of the day.</li>
        </ol>
    </div>
    
}

ReactDOM.render(<Page /> , document.getElementById("root"))
