import {Link} from 'react-router-dom';
import navstyle from './navstyle.css';

function Menu()
{
    return <>
    <div className='navbar'>

        <Link className='nav-color' to='/'>Home</Link>
        {/* <Link className='nav-color' to='InstaVideo'>Video</Link> */}
        <Link className='nav-color' to='Videoplayer'>Video</Link>
        <Link className='nav-color' to='ContactForm'>Contact</Link>
    </div>
    </>
}

export default Menu;