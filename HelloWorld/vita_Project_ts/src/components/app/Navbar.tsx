import { Link } from 'react-router-dom';

const Navigation = () =>{
    return(
        <> 
            <nav>
                <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/AboutUs'>About Us</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/contactus'>Contact Us</Link>
            </nav>
        </>
    );
};
export default Navigation