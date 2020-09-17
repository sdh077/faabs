import Nav from './layout/nav'
import Footer from './layout/footer'
import Main from './main/main'
const Page = ({children}) => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <Nav />
        <div className='navmargin'/>
        <>
        {children}
        </>
        <Footer/>
      </div>
      <style jsx>
        {`
          .navmargin {
            margin-top: 66px;
          }
        `}
      </style>
    </div>
  )
}

export default Page
