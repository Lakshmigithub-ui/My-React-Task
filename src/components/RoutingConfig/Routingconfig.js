import {Routes, Route} from 'react-router'
import Home from '../Home/Home';
import ContactForm from '../ContactForm/ContactForm';
import Videoplayer from '../VideoPlayer/Videoplayer';
import InstaVideo from '../InstaVideo/InstaVideo';


function Routingconfig()
{
    return <>
    
        <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='Videoplayer' element={<Videoplayer></Videoplayer>} ></Route>
            <Route path='ContactForm' element={<ContactForm></ContactForm>} ></Route>
            <Route path='InstaVideo' element={<InstaVideo></InstaVideo>} ></Route>

        </Routes>
        
    </>
}

export default Routingconfig;