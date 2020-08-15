import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import {translation} from "./I18n/i18n";


function App() {
  const lang = useSelector(state => state.languageReducer.language)
  const dispatch = useDispatch()

  return (
    <div className="App">
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
      <div className='logos'>
        <img src='../vscode.jpg' alt='' width='90' height='35'></img>
        <img src='../git.png' alt='' width='90' height='35'></img>
        <img src='../node.png' alt='' width='90' height='35'></img>
        <img src='../mongo.png' alt='' width='90' height='35'></img>
        <img src='../react.png' alt='' width='90' height='35'></img>
        <img src='../nextjs.png' alt='' width='90' height='35'></img>
      </div>




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




      <div className='portfolio'>

        <h2 className='titre-h1'>{translation(lang,"titre03")}</h2>
        <span className='titre-soustitre'>{translation(lang,"soustitre03")}</span>

        <div className='project'>
          <img src='./ametyst.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
          <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
            <h3>{translation(lang,"titre04")}</h3>
            <span>{translation(lang,"soustitre04")}</span>
            <div className='language-used'>
                <div>REACT</div>
                <div>REDUX</div>
                <div>MONGO DB</div>
                <div>NODE & EXPRESS</div>
                <div>CLOUDINARY</div>
                <div>ANT DESIGN</div>
                <div>CSS</div>
            </div>
            <p>{translation(lang,"p04")}</p>
            <div className='project-btn'>
              <a href='https://ametyst.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              <a href='https://github.com/HorusCorp/AssoGestionCotisation' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
            </div>
          </div>
        </div>


        <div className='project'>
          <img src='./Sungym.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
          <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
            <h3>{translation(lang,"titre05")}</h3>
            <span>{translation(lang,"soustitre05")}</span>
            <div className='language-used'>
                <div>NEXT JS</div>
                <div>REDUX</div>
                <div>MONGO DB</div>
                <div>NODE & EXPRESS</div>
                <div>STRIPE</div>
                <div>CSS</div>
            </div>
            <p>{translation(lang,"p05")}</p>
            <div className='project-btn'>
              <a href='#' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              <a href='https://github.com/HorusCorp/SunGym' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
            </div>
          </div>
        </div>

      
        <div className='project'>
          <img src='./gameshop.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
          <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
            <h3>{translation(lang,"titre06")}</h3>
            <span>{translation(lang,"soustitre06")}</span>
            <div className='language-used'>
                <div>REACT</div>
                <div>REDUX</div>
                <div>MONGO DB</div>
                <div>NODE & EXPRESS</div>
                <div>CSS</div>
            </div>
            <p>{translation(lang,"p06")}</p>
            <div className='project-btn'>
            <a href='https://peaceful-anchorage-19337.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
            <a href='https://peaceful-anchorage-19337.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
            </div>
          </div>
        </div>

        <div className='project'>
          <img src='./ivaliceFR.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
          <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
            <h3>{translation(lang,"titre07")}</h3>
            <span>{translation(lang,"soustitre07")}</span>
            <div className='language-used'>
                <div>REACT</div>
                <div>NODE</div>
                <div>CSS</div>
            </div>
            <p>{translation(lang,"p07")}</p>
            <div className='project-btn'>
              <a href='http://www.ivalicefr.developpeur-lyon.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              <a href='https://github.com/HorusCorp/FFWOTV' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a> 
            </div>
          </div>
        </div>



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
              
                  <a className='linkedin-btn' href='' target='_blank'>{translation(lang,"linkedinbtn")}</a>
                  <a className='github-btn' href='' target='_blank'>{translation(lang,"githubbtn")}</a>
                  <a className='cv-btn' href='' target='_blank'>{translation(lang,"cvbtn")}</a>
                
            </div>

          </div>

        </div>

        <div className="footer">
            © 2020 Arnaud Rey - {translation(lang,"footer")}
        </div>

       


      </div>

    </div>
  );
}

export default App;
