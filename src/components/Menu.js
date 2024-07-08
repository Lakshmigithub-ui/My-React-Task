import {Link} from 'react-router-dom';

function Menu()
{
    return <>
        <Link to='/'>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link>
        <Link to='InstaVideo'>Insta Video &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to='ContactForm'>Contact Form</Link>
    </>
}

export default Menu;