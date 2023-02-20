import {CiSearch} from 'react-icons/ci'
import {SlBasket} from 'react-icons/sl'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'


function Header(){
    return(
        <header>
            <h1><a href='#'>CALIFORNIA</a></h1>
            <ul>
                <li className="item"><a href="#">ALL PRODUCTS</a> </li>
                <li className="item"><a href="#">SOLUTIONS</a><IoIosArrowDown/></li>
                <li className="item"><a href="#">ABOUT</a></li>
                <li className="item"><a href="#">SUPPORT</a></li>
            </ul>
            <ul>
                <li className='icon'><CiSearch/></li>
                <li className='icon'><SlBasket/></li>
                <li className='icon'><AiOutlineUser/></li>
            </ul>
        </header>
    );
}
export default Header