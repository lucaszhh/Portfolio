import React from 'react'

const Form = () => {
  return (
    <div className="formulario" id="contact">
        <h2 className="contactme">Contact Me</h2>
        <form className="form" action="submit">
            <label className="valorimput" for="name" id="name">Name</label>
            <input className="imputform" type="text" id="name"/>
            <label className="valorimput" for="email" id="email">E-mail</label>
            <input className="imputform" type="email" id="email"/>
            <label className="valorimput" for="message" id="message">Message</label>
            <textarea name="message id=" message cols="30" rows="10"></textarea>
            <div className="botonera">
                <button className="btnsubmit btns" type="submit" id="btnSubmit">Submit</button>
                <button className="btnreset btns" type="reset" id="btnReset">Reset</button>
            </div>
        </form>
    </div>
  )
}

export default Form