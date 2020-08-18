import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import {translation} from "./I18n/i18n"
import Portfolio from './Portfolio'
import Carousel from './carousel';
// import SlideSunGYM from './SlideSunGYM';




function App() {
  const lang = useSelector(state => state.languageReducer.language)
  const dispatch = useDispatch()

  return (
   
    <div className="App">

      {/* NAVBAR */}
      <div className='navbar'>
          <div className='empty-nav'>

          </div>

          <ul>
            <li>{translation(lang,"nav-apropos")}</li>
            <li>{translation(lang,"nav-portfolio")}</li>
            <li>{translation(lang,"nav-contact")}</li>
            <li>
            <div className='box-btn'>
              <div className='btn btn-fr' onClick={(() => dispatch({ type: 'fr' }))}><img src='../france.svg' alt='fr' width='30' heigh='20'></img></div>
              <div className='btn btn-en' onClick={(() => dispatch({ type: 'en' }))}><img src='../uk.svg' alt='fr' width='30' heigh='20'></img></div>
              <div className='btn btn-ko' onClick={(() => dispatch({ type: 'ko' }))}><img src='../ko.svg' alt='ko' width='30' heigh='20'></img></div>
            </div>
            </li>
          </ul>

      </div>
      

      {/* BANNER */}
      <div className='titre'>
        <div style={{width:'40%',display:'flex',justifyContent:'flex-end',marginRight:'55px'}}>
          <div className='avatar-pics' data-aos="fade-right" data-aos-duration="2500"></div>
        </div>
        <div className='titre-text' data-aos="fade-left" data-aos-duration="2500">
          <h1 className='titre-h1'>{translation(lang,"titre")}</h1>
          <span className='titre-soustitre'>{translation(lang,"soustitre")}</span>
          <p className='titre-txt'>{translation(lang,"titre-txt")}</p>
        </div>
      </div>



      {/* CAROUSEL DE LOGO */}
      <div className='logos'>
        <Carousel/>
      </div>




      {/* PRESENTATION */}
      <div className='presentation'>

        <h2 className='titre-h1'>{translation(lang,"titre02")}</h2>
        <span className='titre-soustitre'>{translation(lang,"soustitre02")}</span>

        <div className='card-zone'>
          <div className='card'>
            <h2>{translation(lang,"card-h2")}</h2>
            <p>{translation(lang,"card-p")}</p>
          </div>
          <div className='card'>
            <h2>{translation(lang,"card-h202")}</h2>
            <p>{translation(lang,"card-p02")}</p>
          </div>
          <div className='card'>
            <h2>{translation(lang,"card-h203")}</h2>
            <p>{translation(lang,"card-p03")}</p>
          </div>
        </div>

      </div>
      {/* <SlideSunGYM/> */}


      {/* PORTFOLIO */}
      <Portfolio/>


     


      {/* CONTACT */}
        <div className='contact-zone'>

          <h2 className='titre-h1'>{translation(lang,"mailh2")}</h2>
          <span className='titre-soustitre'>{translation(lang,"mailspan")}</span>
    
          <div className="form-links">

            <div className='form'>
              <input type="text" placeholder={translation(lang,"mailinput1")}></input>
              <input type='email' placeholder={translation(lang,"mailinput2")}></input>
              <textarea placeholder={translation(lang,"mailtextarea")}></textarea>
              <div className='btn-black' type='submit'>{translation(lang,"mailbtn")}<img src='' alt=''></img></div>
            </div>

            <div className='links'>
                  <a className='linkedin-btn' href='https://www.linkedin.com/in/arnaud-rey-8a6695185/' target='_blank' rel="noopener noreferrer" >{translation(lang,"linkedinbtn")}</a>
                  <a className='github-btn' href='https://github.com/HorusCorp' target='_blank' rel="noopener noreferrer" >{translation(lang,"githubbtn")}</a>
                  <a className='cv-btn' href='https://drive.google.com/file/d/1PijS4_bNqq4cuSaqHOimrGI_sCfcS42k/view?usp=sharing' download>{translation(lang,"cvbtn")}</a>
            </div>

          </div>

        </div>

        <div className="footer">
            © 2020 Arnaud Rey - {translation(lang,"footer")}
        </div>

      
      </div>
    

    
  );
}

export default App;
