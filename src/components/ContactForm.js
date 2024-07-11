import React, { useState } from 'react';
import Form from './Form.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    dob: '',
    gender: '',
  });


  return (
    <form  className='style'>
      <br />  <br />
      <label>
        Name:
        <input  type="text" name="name" placeholder="Type your name"/>
      </label>

      <br /> <br />

      <label>
        Contact Number:
        <input type="text" name="contactNumber" placeholder="Contact number" />
      </label>
      <br /> <br />


      <label>
        Date of Birth:
        <input type="date" name="dob"  />
      </label>
      <br /> <br />


      <label>
        Gender:
        <select name="gender" >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <br />

      <button className='style1' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
