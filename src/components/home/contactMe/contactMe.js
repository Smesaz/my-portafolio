import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {HashLoader} from 'react-spinners';
import './contactMe.css';
import Swal from 'sweetalert2';
import { postMail } from '../../../redux/actions/postMail';
const ContactMe = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const override =`
    display: flex;
    position: absolute;
	  width: 100vw;
	  height: 100vh;
	  justify-content: center;
	  align-items: center;
		z-index: 500;
		transition: all .5s ease-out;
	`;

  const [input, setInput] = useState({
    name:'',
    lastname:'',
    email:'',
    message:'',
  });
  const [error, setError] = useState(''); 
  
  const handleInputChange = (e)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if(e.target.name==='email'){
      validateMail(e);
    }
  }
  const validateMail = (e)=>{
    if(!/\S+@\S+\.\S+/.test(e.target.value)){
      setError('"Debe ser un email válido"');
    } else{
      setError('');
    }
  }

  const alert = async(e)=>{
    e.preventDefault();
    setLoading(true);
    let json = await dispatch(postMail(input));
    setLoading(false)
    if(json.payload.error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: json.payload.error,
      });
    } else{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success!",
        text: "Your mail has been sending!",
      });
      setInput({
        name:'',
        lastname:'',
        email:'',
        message:'',
      })
    }
  }
  const notAlert = (e)=>{
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "All fields are required!",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return (
    <section id="contactme" class="contact sec-pad dynamicBg">
      {loading && (<HashLoader
        css={override}
        size={70}
        color={"#0062b9"}
        loading={loading} />
        )}
    <div class="main-container">
        <span class="heading-sec__main heading-sec__main--lt">Contáctame</span>
     
      <div class="contact__form-container">
        <form action="#" class="contact__form">
          <div class="contact__form-field">
            <label class="contact__form-label" for="name">Nombre</label>
            <input
              required
              placeholder="Escribe tu nombre"
              type="text"
              class="contact__form-input"
              name="name"
              value={input.name}
              onChange={(e)=> handleInputChange(e)}
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="name">Apellido</label>
            <input
              required
              placeholder="Escribe tu Apellido"
              type="text"
              class="contact__form-input"
              name="lastname"
              value={input.lastname}
              onChange={(e)=> handleInputChange(e)}
            />
          </div>
          <div class="contact__form-field">
            <label class="contact__form-label" for="email">Correo electrónico</label>
            <input
              required
              placeholder="Ecribe tu correo electrónico"
              type="email"
              class={error ? "contact__form-input-error" : "contact__form-input"}
              name="email"
              value={input.email}
              onChange={(e)=> handleInputChange(e)}
            />
          </div>
          {!error ? null : <span class="contact__form-error-span">{error}</span>}
          <div class="contact__form-field">
            <label class="contact__form-label" for="message">Mensaje</label>
            <textarea
              required
              cols="30"
              rows="10"
              class="contact__form-input"
              placeholder="Escribe tu mensaje"
              name="message"
              value={input.message}
              onChange={(e)=>handleInputChange(e)}
            ></textarea>
          </div>
          {input.name.length<=0 || input.lastname.length<=0 || error || input.message.length<=0 ? (
            <button 
            type="submit" 
            class="btn isDisabled primary-btn2" 
            onClick={notAlert}>
            Enviar
          </button>
          ):(
            <button 
            type="submit" 
            class="btn primary-btn"
            onClick={alert}>
            Enviar
          </button>
          )}
          
        </form>
      </div>
    </div>
  </section>
  )
};

export default ContactMe;
