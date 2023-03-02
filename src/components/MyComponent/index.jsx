import React from 'react';
import { AllContext } from '../App/MyContext';
import Link from 'next/link';

const MyComponent = () => {
    const { ls, lf, s, f, Icons } = React.useContext(AllContext);
    const icons = new Icons();

    return (
        <React.Fragment>
            <p>
                {s?.data?.nombre}
            </p>
            <br />
            <input 
                type="text" 
                name="nombre" 
                style={{border:'2px solid #f00'}}
                id=""
                value={s?.data?.nombre || ''}
                onChange={e => {
                    f.upgradeLvl1('data', 'nombre', e.target.value)
                }}
                    />

            <p>
                <Link href='/'>
                    Para la casa
                </Link>
            </p>
        </React.Fragment>
    )
}

export { MyComponent };