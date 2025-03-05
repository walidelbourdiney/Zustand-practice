import React from 'react'
import {Formik,  Field, useFormik} from 'formik';
import * as Yup from 'yup';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: ""
        },
        onSubmit: values => {
            console.log(values)
        },
        validate: values =>{
            let errors = {};

            if(!values.name){
                errors.name = "Required"
            }
            if(!values.email){
                errors.email = "Required"
            }
            return errors;
      
    }})
  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name? <div>{formik.errors.name}</div> : null}
        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email? <div>{formik.errors.email}</div> : null}

        <label htmlFor="channel">Channel</label> 
        <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>


        <button type='submit'>Submit</button>
    </form>
  )}


export default Form;