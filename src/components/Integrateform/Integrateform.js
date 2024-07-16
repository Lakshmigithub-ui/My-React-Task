import React, { useState } from 'react';
import Axios from 'axios';

function Integrateform() {
    const url = "https://localhost:3000/api/Integrateform/create"
    const[data, setData] = useState({
        name: "",
        date: "",
        iduser: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            name:data.name,
            date:data.date,
            iduser:data.iduser
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)


    }
    return (
        <div>
            <form onSubmit = {(e) => SubmitEvent(e)}>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder='name' type='text'></input>
                <input onChange={(e) => handle(e)} id="date" value={data.date} placeholder='date' type='date'></input>
                <input onChange={(e) => handle(e)} id="iduser" value={data.iduser} placeholder='iduser' type='number'></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Integrateform;

// const Integrateform = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/api/Integrateform', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const result = await response.json();
//       if (response.ok) {
//         setResponseMessage('Your message has been sent successfully.');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setResponseMessage(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       setResponseMessage('An error occurred while sending your message.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea name="message" value={formData.message} onChange={handleChange} required />
//       </div>
//       <button type="submit">Send</button>
//       {responseMessage && <p>{responseMessage}</p>}
//     </form>
//   );
// };

// export default Integrateform;
