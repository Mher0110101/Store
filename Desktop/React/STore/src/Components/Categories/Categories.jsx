import "./categories.scss"
import LAPTOP from "../../Images/Laptop.png"
import IPHONE13 from "../../Images/iphone13.png"
import TABLET from "../../Images/Tablet.png"
import WATCH from "../../Images/Watch.png"

function Categories(){
    return(
        <div className="categories">
            <div className="categories_1">
                <img src={LAPTOP} alt="laptop" />
            </div>
            <div className="categories_2">
                <img src={IPHONE13} alt="13" width="380px" height="500px"/>
                <p>Your day to day life</p>
            </div>
            <div className="categories_3">
            <p>Tablet<br/> Empower Your Work</p>
                <img src={TABLET} alt="TABLET"  width="400px" height="500px"/>
            </div>
            <div className="categories_4">                
                <img src={WATCH} alt="WATCH" width="300px" height="300px"/>     
                <p>Watch not just stylish</p>   
            </div>            
        </div>
    )
}
export default Categories