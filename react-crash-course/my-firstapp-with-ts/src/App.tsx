import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
import HelloWorld6 from './components/helloworld/HelloWorld6';
import HelloWorld7 from './components/helloworld7/HelloWorld7';

const App: React.FC = () => {
 return (
 <div>
 <HelloWorld />
 <HelloWorld2 name="Michael" />
 <HelloWorld2 />
 <HelloWorld3 name="Joy"/>
 <HelloWorld4 />
 <HelloWorld5 />
 <HelloWorld6 />
 <HelloWorld7 />
 </div>
 );
}
export default App;