import styled from 'styled-components'
import Link from 'next/link'

const Nav = () => {
  const links = [
    {
      title: 'ABOUT',
      link: '',
    },{
      title: 'VISIT',
      link: '',
    },{
      title: 'SHOP',
      link: '',
    },{
      title: 'CLASS',
      link: '',
    },{
      title: 'JOURNAL',
      link: '',
    },{
      title: 'CONTACT',
      link: '',
    }
  ]
  return (
    <NavAbsol>
      <NavFrame className='shadow col-lg-12'>
        <Logo className='col-lg-4'>faabs_coffee_roasters</Logo>
        <Box className='col-lg-7'>
          <UL className="nav">
            {
            links.map(link => (
              <li className="nav-item">
                <Link href={link.link} key={link.title} className="nav-item">
                  <a className="nav-link linkTxt" href="#">{link.title}</a>
                </Link>
              </li>
            ))
            }
          </UL>
        </Box>
        <Box className='col-lg-1'>
          <LoginBtn />
          <CartBtn />
        </Box>
      </NavFrame>
      <style jsx>
        {`
          .linkTxt {
            color: black;
          }
        `}
      </style>
    </NavAbsol>
  )
}
const NavAbsol = styled.div`
  position: fixed;
  width: 100%;
`
const NavFrame = styled.div`
  height: 66px;
  width: 100%;
  vertical-align: middle;
  display: flex;
  font-weight: 200;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.div`
  font-weight: 200;
  font-size: 30px;
  margin-left: 20px;

`
const Box = styled.div`
`
const UL = styled.ul`
  width: 100%;
`
function LoginBtn() {

  return(
    <>
      <span className='login'>
        Log in
      </span>
      <style jsx>
      {`
        .login {
          margin-left: 10px;
          margin-right: 10px;
        }
      `}
      </style>
    </>
  )
}
function CartBtn() {
  return(
    <span>
      <Link href='/cart'>
        <a>
          <i className="fa fa-cart-plus"/>
        </a>
      </Link>
      <style jsx>
      {`
        a {
          color: black;
        }
      `}
      </style>
    </span>
  )
}
export default Nav
