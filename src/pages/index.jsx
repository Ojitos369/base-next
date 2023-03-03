import Link from 'next/link';
import React, { Fragment }  from 'react';

const Home = () => {
    return (
        <React.Fragment>
            <p>
                <Link to={`/test`}>
                    Vamos para el test
                </Link>
            </p>
        </React.Fragment>
    )
}

export default Home;