import { Link } from 'react-router-dom';
import Helpers from '../framework/utils/helpers'
import {ToggleComponent} from '../hooks/ExampleComp/ToggleComponent';
import {TimeoutComponent} from '../hooks/ExampleComp/TimeoutComponent';

interface IContactProps {
    email: any;
    mobile: any;
}

export const ContactUs = ({ email, mobile }: IContactProps) =>{
    return(
        <div>
             Contact me - With Props<br />
             Email: {email} <br />
             Mobile: {mobile}
            <hr></hr>
            <ToggleComponent></ToggleComponent>
            <hr></hr>
            <TimeoutComponent></TimeoutComponent>
            <hr></hr>
            <span>Text: {Helpers.isNullOrEmpty("   ").toString()}</span>
            <h2>This is ContactUs <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;</h2>
        </div>        
    );
};
//export default ContactUs;