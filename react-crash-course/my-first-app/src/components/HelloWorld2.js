import React from 'react';
const HelloWorld2 = (props) => {
 return (
 <div>
 <p>Hello {props.name}. Greetings
from React.</p>
 </div>
 )
}
HelloWorld2.defaultProps = {
    name: "Michael"
   }
export default HelloWorld2;