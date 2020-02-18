import React, { Component } from "react";
import ErrorMsg from '../Img/ErrorMsg.jpg';

class Document extends Component {
   constructor() {
      super()
      this.state = {
         showMe: true
      }
   }
   operation()
   {
      this.setState({
         showMe:!this.state.showMe
      })
   }

   render() {
      return (
         <div>
            <h2>Documentation</h2>
               <h1>How to Fix Space error using NPM on Windows</h1>
                  <h1>Documentation History</h1>
                  <table>
                     <tr>       
                        <th>version</th>
                        <th>name</th>
                        <th>contact</th>
                        <th>Reason for Change</th>
                     </tr>
                     <tr>
                        <td>01/26/2020</td>
                        <td>JCompMan-STL</td>
                        <td></td>
                        <td>Initial Release</td>
                     </tr>
                     <tr>
                        <td>02/05/2020</td>
                        <td>JCompMan-STL</td>
                        <td></td>
                        <td>Updated for Format</td>
                     </tr>
                     <h1>Why This Document was Created</h1>
                        <h2>This document is to be used as a reference guide.</h2>
                        <p></p>
                        <h2>Using NPM on windows where a space in the user profile causes errors for installation of React.js eco-system.</h2>
                     <p></p>
                  </table>
                  <table>
                     <tr>
                        <th>Table of Contents</th>
                     </tr>
                     <tr>
                        <td>Documentation History	2</td>
                        <td>Why This Document was Created	3</td>
                        <td>Setup Windows PROFILE:	5</td>
                        <td>What Error is Generated?	6</td>
                        <td>How to Fix the Error	7</td>
                     </tr>
                  </table>
                     <h2>When you setup Windows you will create a profile, which can be seen at File Explorer as C:\User\{ 'USER NAME' }.</h2>
                     <h2>If there’s a space in your profile NPM will throw an error like below:</h2>
                     <button onClick = {() => this.operation() }>What does the Error look like?</button>
                     {
                        this.state.showMe?
                           <div><img src={ErrorMsg} alt={"ErrorMsg"}/></div>
                           :null
                     }
                  <p></p>
                  <h1>How to Fix the Error</h1>
                  <h2>To fix this you’ll need to change the location of the NPM cache.  I’ve created the following directory in windows: c:\DEV\ENV and c:\DEV\Tools.</h2>
                  <br></br>
                  <h2>I used the folllowing code to fix the cache issue: npm config set cache C:\DEV\ENV\npm-cache –global.</h2>
                  <br></br>
                  <h2>NOTE: you’re just storing the Node ( NPM ) cache in a location without a space in it</h2>.
            <h2>Instruction</h2>
         </div>
      );
   }
}

export default Document;