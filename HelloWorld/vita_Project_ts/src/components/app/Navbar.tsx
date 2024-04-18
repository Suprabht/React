import { Link } from 'react-router-dom';
import MenuItem from './../../menuItem';

const Navigation = () =>{
    return(
        <> 
            <nav>
            {MenuItem.Routes().map((route:any, index:any) => (
              <Link className='menu'
                key={index}
                to={route.route}
                >{route.componentName}</Link> 
            ))}
            </nav>
        </>
    );
};
export default Navigation