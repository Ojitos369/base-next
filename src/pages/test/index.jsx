import React, { Fragment } from 'react';
import { MyComponent } from "@/components/MyComponent";

const Test = () => {
    return (
        <Fragment>
            <p className='font-black'>
                Hola desde Test
                <br />
            </p>
            <MyComponent />
        </Fragment>
    )
}
export default Test;
// export { Test };