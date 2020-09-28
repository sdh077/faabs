import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeCart } from '../store/cart'
import Page from '../components/page'
import Main from '../components/cart/main'

const Index = () => {
  return (
    <>
      <Page>
        <Main />
      </Page>
    </>
  )
}

export async function getStaticProps(props) {
  return {
    props: {},
  }
}

export default Index
