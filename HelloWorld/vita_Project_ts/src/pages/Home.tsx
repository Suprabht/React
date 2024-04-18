import { useSelector, useDispatch } from "react-redux";
import {decrement, increment} from "../stateManagement/actions/index";

const Home = () =>{
    const counter = useSelector(state => (state as any).counter)
    const isLogged = useSelector(state => (state as any).isLogged)
    const dispatch = useDispatch();

    return(
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={()=> dispatch(increment(5))}>+</button>
            <button onClick={()=> dispatch(decrement(5))}>-</button>
            {isLogged? <h3>Valuable information</h3>:""}
        </>
    );
};
export default Home;
