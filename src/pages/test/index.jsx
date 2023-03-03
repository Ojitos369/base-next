import React from 'react';
import { MyComponent } from "@/components/MyComponent";

const Test = () => {
    return (
        <React.Fragment>
            <p className='font-black'>
                Hola desde Test
                <br />
                <MyComponent />
            </p>
        </React.Fragment>
    )
}
export default Test;
// export { Test };