import IPHONE from '../../Images/Iphone.png'
import GALAXY from '../../Images/galaxy.png'
import IPHONE12 from '../../Images/12.png'
import {SlArrowLeft,SlArrowRight} from 'react-icons/sl'
import { useRef, useState } from 'react'

const IMAGE = [IPHONE,GALAXY,IPHONE12]
function Main(){
    const imgRef = useRef()
    const [carousel,setCarousel] = useState(0)
    const next = () => {
        carousel < IMAGE.length-1 ?  setCarousel(carousel+1) : setCarousel(0)
        imgRef.current.src = IMAGE[carousel]
    }
    const prev = (e) => {
        carousel > 0 ?  setCarousel(carousel-1) : setCarousel(IMAGE.length-1)
        imgRef.current.src = IMAGE[carousel]
    }
    return(
        <div className="main">            
            <div className='main_textSide'>
                <h3 style={{fontSize:"50px"}}>The new phones are here take a took</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, et omnis! Voluptates, magni rem! Corporis tempore aut debitis nulla dolore voluptas aliquid quas minima magni.</p>
                <button>Explore</button>
            </div>
                <p style={{fontSize:"30px", position:"relative"}}><SlArrowLeft onClick={prev} className="arrow"/></p>
                <div className='main_imgSide'>
                    <img ref={imgRef} src={IMAGE[carousel]} alt="iphoneImg" width={"650px"} height="550px"/>
                </div>
                <p style={{fontSize:"30px", position:"relative"}}><SlArrowRight onClick={next} className="arrow" /></p>
                        
        </div>
    );
}
export default Main