import { Link } from 'react-router-dom';
import MenuItem from './../../menuItem';
export const Navigation = () =>{
    return(
        <> 
            <nav>
            {(MenuItem.Routes().filter((route:any) => route.isLinkVisible)).map((route:any, index:any) => (
              <Link className='menu'
                key={index}
                to={route.route}
                >{route.componentName}</Link> 
            ))}
            </nav>
        </>
    );
};