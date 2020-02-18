import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

const Docs = () => {
    return (
      <div>
         <h2>Documentation Rules</h2>
         <p>For Links the website should focus on the following:</p>
         <ol>
            <li><h3>It should be blue if it’s <u>Never Visited Link</u>.</h3></li>
            <li><h4>If it’s been visited already, it should be <u>Underlined color Purple</u>.</h4></li>
            <li><h5>When the mouse rolls over the link, it should be reddish orange</h5></li>
         </ol>
         <p>For Navigation Links the website should focus on the following:</p>
         <ol>
            <li>Always have a black background, unless in direct sunlight then change text color to white.</li>
            <li>Have white text unless unviewable, then change the text color to black text</li>
            <li>When link is active have blue box surrounding active link.</li>
         </ol>
      </div>
   );
}

export default Docs;