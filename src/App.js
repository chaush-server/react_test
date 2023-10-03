// 1
// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }
//
// 2
// export default function Profile() {
//   return (<img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />);
// }
// 
// 3
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }
// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile/>
//       <Profile/>
//     </section>
//   );
// }
//
// 4
// export function Congratulations(){
//   return (
//     <h1>Good Job!!</h1>
//   );
// }
// потом import {Configurations} ......
//
// 5
// const person = {
//   name: ' Брендан Эйх',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name} – создатель языка программирования JS</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }
//6
// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   },
//   url: 'https://i.imgur.com/7vQD0fPs.jpg'
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={person.url}
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }
//7
// function Avatar({ person, size }) {
//       const arg = size > 90 ? 'b' : 's'
//     return (
//       <img
//       className="avatar"
//       src={getImageUrl(person, arg)}
//       alt={person.name}
//       width={size}
//       height={size}
//       />
//       );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={40}
//       person={{ 
//         name: 'Gregorio Y. Zara', 
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }
//8
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? '✔' : '❌'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }
// 9 
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }
// 10
// export default function Signup() {
//   function nonreload(event){
//     event.preventDefault()
//   }
//   return (
//     <form onSubmit={nonreload}>
//       <input />
//       <button type='submit' onClick={() => alert('Submitting!')}>Send</button>
//     </form>
//   );
// }
// 11
// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={(event) => {event.stopPropagation();alert('Playing!')}}>
//         Play Movie
//       </button>
//       <button onClick={(event) => {event.stopPropagation();alert('Uploading!')}}>
//         Upload Image
//       </button>
//     </div>
//   );
// }
// 12
// import { useState } from "react";
// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }
// 13 
// import { useState } from 'react';

// export default function FeedbackForm() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('');
//     if (isSent) {
//         return <h1>Thank you!</h1>;
//     } else {
//         return (
//             <form
//                 onSubmit={(e) => {
//                     e.preventDefault();
//                     alert(`Sending: "${message}"`);
//                     setIsSent(true);
//                 }}
//             >
//                 <textarea
//                     placeholder="Message"
//                     value={message}
//                     onChange={(e) =>
//                         setMessage(e.target.value)
//                     }
//                 />
//                 <br />
//                 <button type="submit">Send</button>
//             </form>
//         );
//     }
// }
