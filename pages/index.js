import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startClock, serverRenderClock, initializeStore } from '../store'
import Page from '../components/page'
import Head from 'next/head'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setInterval(() => dispatch(startClock(), 1000))
  }, [dispatch])

  return (
    <>
      <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
      <Page />
    </>
  )
}

export async function getStaticProps() {
  const store = initializeStore()
  store.dispatch(serverRenderClock())

  return {
    props: {},
  }
}

export default Index
