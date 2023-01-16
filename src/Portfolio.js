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
        <div id="portfolio" className='portfolio'>

          <h2 className='titre-h1'>{translation(lang,"titre03")}</h2>
          <span className='titre-soustitre'>{translation(lang,"soustitre03")}</span>
          {/* PROJET PAGE 1-0   React Amulet */}
          <div className='project'>
            <img src='./amulet.jpg' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre00")}</h3>
              <span>{translation(lang,"soustitre00")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
                  <div>NODE</div>
                  <div>CSS</div>
                  <div>MATERIAL UI</div>
              </div>
              <p>{translation(lang,"p00")}</p>
              <div className='project-btn'>
                <a href='https://amulet-horuscorp.vercel.app/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              </div>
            </div>
          </div>
      
          {/* PROJET PAGE 1-1 SUN GYM */}
          <div className='project'>
            <img src='./Sungym.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
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
                {/* <a href='https://sungym69.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a> */}
                <a href='https://github.com/HorusCorp/SunGym' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>


          {/* PROJET PAGE 1-2 IVALICE */}
   


          {/* PROJET PAGE 1-3 PORTFOLIO */}
          <div className='project'>
            <img src='./portfolioperso.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre11")}</h3>
              <span>{translation(lang,"soustitre11")}</span>
              <div className='language-used'>
                  <div>REACT.JS</div>
                  <div>JSX</div>
                  <div>REDUX</div>
                  <div>ANT DESIGN</div>
                  <div>SASS</div>
                  <div>AOS</div>
                  <div>SWIPER.JS</div>
                  <div>EMAIL.JS</div>
              </div>
              <p>{translation(lang,"p11")}</p>
              <div className='project-btn'>
              <a href='https://portfolio-arnaud-rey.web.app/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              <a href='https://github.com/HorusCorp/Portfolio' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>

          {/* PROJET PAGE 1-4 PASSWORD GENERATOR*/}
        <div className='project'>
            <img src='./pgScreen.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
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

          {/* PROJET PAGE 1-5 Google*/}
          <div className='project'>
            <img src='./google.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre15")}</h3>
              <span>{translation(lang,"soustitre15")}</span>
              <div className='language-used'>
                  <div>JSX</div>
                  <div>JAVASCRIPT</div>
                  <div>REACT.JS</div>
                  <div>FIREBASE</div>
                  <div>GOOGLE SEARCH API</div>
                  <div>CSS</div>
                  <div>FLEXBOX</div>
                  <div>REACT ROUTER DOM</div>
              </div>
              <p>{translation(lang,"p15")}</p>
              <div className='project-btn'>
              <a href='https://clone-demo.web.app/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
                <a href='https://github.com/HorusCorp/YouTubeCloneWithReact' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>


          


          {/* PAGINATION */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className='page-btn' onClick={()=>SetPage('1')}>1</div>
            <div className='page-btn' onClick={()=>SetPage('2')}>2</div>
            <div className='page-btn' onClick={()=>SetPage('3')}>3</div>
          </div>

        </div>
    )}
    else if(page === '2'){return(
        <div id="portfolio" className='portfolio'>

          <h2 className='titre-h1'>{translation(lang,"titre03")}</h2>
          <span className='titre-soustitre'>{translation(lang,"soustitre03")}</span>

          {/* PROJET PAGE 2-0 GENSHIN */}
          <div className='project'>
            <img src='./genshin.jpg' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre23")}</h3>
              <span>{translation(lang,"soustitre23")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>JSX</div>
                  <div>CSS</div>
              </div>
              <p>{translation(lang,"p23")}</p>
              <div className='project-btn'>
                <a href='https://genshin-35166.web.app' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
                <a href='https://github.com/HorusCorp/Characters-display' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>

          {/* PROJET PAGE 2-1 HEAVEN */}
          <div className='project'>
            <img src='./heaven.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre09")}</h3>
              <span>{translation(lang,"soustitre09")}</span>
              <div className='language-used'>
                  <div>REACT</div>
                  <div>NODE & EXPRESS</div>
                  <div>JSX</div>
                  <div>CSS</div>
              </div>
              <p>{translation(lang,"p09")}</p>
              <div className='project-btn'>
                {/* <a href='https://heaven-island.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a> */}
                <a href='https://github.com/HorusCorp/Heaven' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>

          {/* PROJET PAGE 2-2 YOU TUBE CLONE*/}
          
          <div className='project'>
            <img src='./youtube.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre14")}</h3>
              <span>{translation(lang,"soustitre14")}</span>
              <div className='language-used'>
                  <div>JSX</div>
                  <div>CSS</div>
                  <div>JAVASCRIPT</div>
                  <div>REACT</div>
                  <div>FLEXBOX</div>
                  <div>REACT ROUTER DOM</div>
              </div>
              <p>{translation(lang,"p14")}</p>
              <div className='project-btn'>
              <a href='https://okami-video.web.app/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
                <a href='https://github.com/HorusCorp/YouTubeCloneWithReact' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>

          {/* PROJET PAGE 2-3 AMETHYST */}
          <div className='project'>
            <img src='./ametyst.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
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
                {/* <a href='https://ametyst.herokuapp.com/' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a> */}
                <a href='https://github.com/HorusCorp/AssoGestionCotisation' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>


        


          {/* PROJET PAGE 2-5 */}
          <div className='project'>
            <img src='./zoom.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre13")}</h3>
              <span>{translation(lang,"soustitre13")}</span>
              <div className='language-used'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JAVASCRIPT</div>
                  <div>STRAPI</div>
              </div>
              <p>{translation(lang,"p13")}</p>
              <div className='project-btn'>
                <a href='https://github.com/HorusCorp/MyFridge' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>
          


          {/* PAGINATION */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className='page-btn' onClick={()=>SetPage('1')}>1</div>
            <div className='page-btn' onClick={()=>SetPage('2')}>2</div>
            <div className='page-btn' onClick={()=>SetPage('3')}>3</div>
          </div>

        </div>
    )} else if(page === '3'){return(
      <div id="portfolio" className='portfolio'>

        <h2 className='titre-h1'>{translation(lang,"titre03")}</h2>
        <span className='titre-soustitre'>{translation(lang,"soustitre03")}</span>

           
        

        {/* PROJET PAGE 3-2 MY FRIDGE */}
        <div className='project'>
            <img src='./myFridge.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre12")}</h3>
              <span>{translation(lang,"soustitre12")}</span>
              <div className='language-used'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JAVASCRIPT</div>
                  <div>STRAPI</div>
              </div>
              <p>{translation(lang,"p12")}</p>
              <div className='project-btn'>
                <a href='https://github.com/HorusCorp/MyFridge' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack02")}</div></a>
              </div>
            </div>
          </div>

          

          {/* PROJET PAGE 3-3 Hulu */}
          <div className='project'>
            <img src='../hulu.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre22")}</h3>
              <span>{translation(lang,"soustitre22")}</span>
              <div className='language-used'>
                  <div>REACT.JS</div>
                  <div>FRONT END ONLY</div>
                  <div>JSX</div>
                  <div>API</div>
                  <div>MATERIAL UI</div>
                  <div>BEM CSS</div>
              </div>
              <p>{translation(lang,"p22")}</p>
              <div className='project-btn'>
                <a href='https://hulu-clone-okami.web.app' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              </div>
            </div>
          </div>


          {/* PROJET PAGE 3-4 AIRBNB */}
          <div className='project'>
            <img src='../rbnb.png' alt='' width="520px" height="300px"></img>
            <div className='project-txt'>
              <h3>{translation(lang,"titre21")}</h3>
              <span>{translation(lang,"soustitre21")}</span>
              <div className='language-used'>
                  <div>REACT.JS</div>
                  <div>REACT ROUTER</div>
                  <div>FRONT END ONLY</div>
                  <div>JSX</div>
                  <div>MATERIAL UI</div>
                  <div>CSS</div>
              </div>
              <p>{translation(lang,"p21")}</p>
              <div className='project-btn'>
                <a href='https://rbnb-clone.web.app' target='_blank' rel="noopener noreferrer"><div className='btn-black'>{translation(lang,"btnblack01")}</div></a>
              </div>
            </div>
          </div>

        

         {/* PAGINATION */}
         <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className='page-btn' onClick={()=>SetPage('1')}>1</div>
            <div className='page-btn' onClick={()=>SetPage('2')}>2</div>
            <div className='page-btn' onClick={()=>SetPage('3')}>3</div>
          </div>
      </div>
    )}
}

export default Portfolio
