import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './APP.css'
import './index.css'
import Product from './Product.jsx'


// function App() {
// return(
// <div>
//  <div className='w-full h-screen bg-red-900 p-4'>
//     <div className='w-44 h-32 rounded-xl bg-blue-600 p-3 text-white'
//     ><h1>hii kaise ho</h1></div>
//  </div>
  
//  <Product />
//  </div>
// );
// };  


// state se value badalna
function App() {
   var [a, b] = useState(50);
   return(
      <div className='w-full h-screen bg-red-900 p-4'>
         <h1>{a}</h1>
      <button onClick={() => b(a + 1)} className='px-3 py-1 bg-green-500 rounded-md'>+</button>
      <Product naam="value" age="30" data={{age:25 ,name:"harsh"}} />
      </div>
   )
}

//componenet me khud ka data banana hota h state

export default App;
// component ek func h jo ki return karega jsx 
//jsx html ki tarah dikhne wala syntax h but uske pass kuch  superpowers h jo html ke pass nahi h 
//jsx is very similar to html with superpowers 
// y html nahi h but html jaise dikhne bala tag h 
//dikhne jaisa jo html j bo jsx h

//example
//<h1>2+2</h1> // ye html h 
//ans 2+2

//<h1>{2+2}</h1> // ye jsx h
//ans h1 tag ke andar 2+2 ka ans yani 4 show hoga
//// powershall me dalna h code run ke liye react --Set-ExecutionPolicy -Scope CurrentUser RemoteSigned