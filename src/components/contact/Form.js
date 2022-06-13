import React from 'react'

const Form = () => {
  return (
    <div class="formulario" id="contact">
        <h2 class="contactme">Contact Me</h2>
        <form class="form" action="submit">
            <label class="valorimput" for="name" id="name">Name</label>
            <input class="imputform" type="text" id="name"/>
            <label class="valorimput" for="email" id="email">E-mail</label>
            <input class="imputform" type="email" id="email"/>
            <label class="valorimput" for="message" id="message">Message</label>
            <textarea name="message id=" message cols="30" rows="10"></textarea>
            <div class="botonera">
                <button class="btnsubmit btns" type="submit" id="btnSubmit">Submit</button>
                <button class="btnreset btns" type="reset" id="btnReset">Reset</button>
            </div>
        </form>
    </div>
  )
}

export default Form