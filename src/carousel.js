import React from 'react'

function Carousel() {
    return (
        <div className='wrapper'>
            <div className='slider'>
               <div className='slide'>
                   <img src='../vscode.jpg' alt=''/>
                   <img src='../git.png' alt=''/>
                   <img src='../node.png' alt=''/>
                   <img className='bigger' src='../express.png' alt=''/>
                   <img src='../mongo.png' alt=''/>
                   <img src='../react.png' alt=''/>
                   <img src='../redux.jfif' alt=''/>
                   <img className='bigger' src='../nextjs.png' alt=''/>
                   <img src='../sass.png' alt=''/>
                </div>
                <div className='slide'>
                   <img src='../vscode.jpg' alt=''/>
                   <img src='../git.png' alt=''/>
                   <img src='../node.png' alt=''/>
                   <img className='bigger'src='../express.png' alt=''/>
                   <img src='../mongo.png' alt=''/>
                   <img src='../react.png' alt=''/>
                   <img src='../redux.jfif' alt=''/>
                   <img className='bigger' src='../nextjs.png' alt=''/>
                   <img src='../sass.png' alt=''/>
                </div>  
            </div>
        </div>
    )
}

export default Carousel
