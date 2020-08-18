import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {translation} from "./I18n/i18n"


function Portfolio() {
  
  const lang = useSelector(state => state.languageReducer.language)

  const [page, SetPage]= useState('1')

  // RESET LA POSITION QUAND LE COMPOSANT SE RECHARGE / CHANGEMENT DE PAGE
  useEffect(() => {
    window.scrollTo(0, 1100)
  }, [page])

  // RENDU DE BASE
if(page === '1'){ return (
        <div className='portfolio'>

          <h2 className='titre-h1'>{translation(lang,"titre03")}</h2>
          <span className='titre-soustitre'>{translation(lang,"soustitre03")}</span>


          {/* PROJET AMETHYST */}
          <div className='project'>
            <img src='./ametyst.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre04")}</h3>
              <span>{translation(lang,"soustitre04")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
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

          {/* PROJET SUN GYM */}
          <div className='project'>
            <img src='./Sungym.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre05")}</h3>
              <span>{translation(lang,"soustitre05")}</span>
              <div className='language-used'>
                  <div>NEXT JS</div>
                  <div>JSX</div>
                  <div>REDUX</div>
                  <div>MONGO DB</div>
                  <div>NODE & EXPRESS</div>
                  <div>STRIPE</div>
                  <div>CSS</div>
              </div>
              <p>{translation(lang,"p05")}</p>
              <div className='project-btn'>
                <a href='https://sungym69.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
                {/* <a href='https://github.com/HorusCorp/SunGym' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a> */}
              </div>
            </div>
          </div>


          {/* PROJET IVALICE */}
          <div className='project'>
            <img src='./ivaliceFR.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre07")}</h3>
              <span>{translation(lang,"soustitre07")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
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


          {/* PROJET GAMESHOP */}
          <div className='project'>
            <img src='./portfolioperso.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre11")}</h3>
              <span>{translation(lang,"soustitre11")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
                  <div>REDUX</div>
                  <div>ANT DESIGN</div>
                  <div>SASS</div>
                  <div>SWIPER JS</div>
              </div>
              <p>{translation(lang,"p11")}</p>
              <div className='project-btn'>
              <a href='https://peaceful-anchorage-19337.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              <a href='https://peaceful-anchorage-19337.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>


          


          {/* PAGINATION */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className='page-btn' onClick={()=>SetPage('1')}>1</div>
            <div className='page-btn' onClick={()=>SetPage('2')}>2</div>
          </div>

        </div>
    )}
    else if(page === '2'){return(
        <div className='portfolio'>

          <h2 className='titre-h1'>{translation(lang,"titre03")}</h2>
          <span className='titre-soustitre'>{translation(lang,"soustitre03")}</span>


          {/* PROJET PAGE 2-1 AMETHYST */}
          <div className='project'>
            <img src='./heaven.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre09")}</h3>
              <span>{translation(lang,"soustitre09")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
                  <div>CSS</div>
              </div>
              <p>{translation(lang,"p09")}</p>
              <div className='project-btn'>
                <a href='https://heaven-island.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
                <a href='https://github.com/HorusCorp/Heaven' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>

          {/* PROJET PAGE 2-2 GENERATOR PASSWORD*/}
          <div className='project'>
            <img src='./pgScreen.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre10")}</h3>
              <span>{translation(lang,"soustitre10")}</span>
              <div className='language-used'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JAVASCRIPT</div>
              </div>
              <p>{translation(lang,"p10")}</p>
              <div className='project-btn'>
                <a href='https://github.com/HorusCorp/PasswordGenerator' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>


          {/* PROJET PAGE 2-3 GAMESHOP*/}
          <div className='project'>
            <img src='./gameshop.png' alt='' width="520px" height="300px" data-aos="fade-right" data-aos-duration="2500"></img>
            <div className='project-txt' data-aos="fade-left" data-aos-duration="2500">
              <h3>{translation(lang,"titre06")}</h3>
              <span>{translation(lang,"soustitre06")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
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


          {/* PROJET PAGE 2-4 */}
          


          {/* PAGINATION */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className='page-btn' onClick={()=>SetPage('1')}>1</div>
            <div className='page-btn' onClick={()=>SetPage('2')}>2</div>
          </div>

        </div>
    )}
}

export default Portfolio
