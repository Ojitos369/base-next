import React from 'react';
// import axios from 'axios';
import { useLocalStorage, localFunctions } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';
import { Icons } from './Icons';
import { helper as hp } from './helper';

const AllContext = React.createContext();

function MyContext(props){

    let exinit;
    try {
        exinit = from_init;
    }
    catch (error) {
        exinit = {};
    }

    const initialState = {
        classNames: {
            generalStyles: 'bg-white text-black',
        },
        exinit
    }

    const [s, dispatch] = useReducer({ reducer, initialState });
    const f = new functions(dispatch, s);

    const localInitialState = {
        theme: 'black',
    }
    // localStorage.removeItem('localStatev2');
    const [ls, localDispatch] = useLocalStorage('crm_iespe_front', localInitialState, f);
    const lf = new localFunctions(localDispatch, ls, s, f, dispatch);


    return (
        <AllContext.Provider
            value={{
                s, f,
                ls, lf, Icons,
                hp,
            }}>
            {props.children}
        </AllContext.Provider>
    );
}


export { MyContext, AllContext };
