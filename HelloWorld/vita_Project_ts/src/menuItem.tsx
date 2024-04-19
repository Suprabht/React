
//TODO: Need to remove all page imports
import routesData from './route.json';
import AboutUs from "./pages/AboutUs";
import {ContactUs}  from "./pages/ContactUs";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Page404 from './pages/errors/Page404'

export default class MenuItem {

    static Routes = ():any => {
        var routeItems: any[] = []
        routesData.forEach((menuItem:any) => {
            
            routeItems.push(
                {
                    route:  menuItem.route,
                    component: eval(menuItem.component),
                    exact: menuItem.exact,
                    componentName: menuItem.component
                }
            )
        });
        //TODO: Need to remove
        const Routes2 = [ Home, AboutUs, ContactUs,Page404, Todo]
        return routeItems;
    };
}