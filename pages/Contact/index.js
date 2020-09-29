import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startClock, serverRenderClock, initializeStore } from '../../store'
import Page from '../../components/page';
import Detail from './Detail';
import Head from 'next/head'

const index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setInterval(() => dispatch(startClock(), 1000))
  }, [dispatch])

  return (
    <>
      <Page>
        <Detail />
      </Page>
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

export default index
