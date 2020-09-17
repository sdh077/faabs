import Nav from './layout/nav'
import Footer from './layout/footer'
import Main from './main/main'
import Head from 'next/head'
const Page = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className='row'>
        <div className='col-md-12'>
          <Nav />
          <div className='navmargin' />
          <>
            {children}
          </>
          <Footer />
        </div>
        <style jsx>
          {`
          .navmargin {
            margin-top: 66px;
          }
        `}
        </style>
      </div>
    </>
  )
}

export default Page
