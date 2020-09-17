import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../../components/page'
import Detail from '../../components/shop/detail'
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <Page>
                <Detail />
            </Page>
        </>
    )
}


export default Index
