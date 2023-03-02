import React from 'react';
import { MyContext } from '@/components/App/MyContext'
import '@/styles/index.css'

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <MyContext>
        <Component {...pageProps} />
      </MyContext>
    </React.Fragment>
  )
}
