import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../../components/page';
import Detail from './Detail';
import Head from 'next/head'
import NaverMapAPI from '../../components/naverMap/NaverMapAPI';

const index = () => {

  return (
    <Page>
      <NaverMapAPI />
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default index
