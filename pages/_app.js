import { useStore } from '../store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Head from 'next/head'
import '../styles/index.css'
import '../styles/global.css'
import '../styles/bootstrap/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  return (
    <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
  )
}
