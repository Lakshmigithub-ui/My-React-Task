import {Routes, Route} from 'react-router'
import Home from './Home';
import InstaVideo from './InstaVideo';
import ContactForm from './ContactForm';

function Routingconfig()
{
    return <>
        <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='InstaVideo' element={<InstaVideo></InstaVideo>} ></Route>
            <Route path='ContactForm' element={<ContactForm></ContactForm>} ></Route>
        </Routes>
    </>
}

export default Routingconfig;