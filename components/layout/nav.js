import styled from 'styled-components'
import Link from 'next/link'

const Nav = () => {
  const links = [
    {
      title: 'ABOUT',
      link: '/about',
    }, {
      title: 'VISIT',
      link: '/visit',
    }, {
      title: 'SHOP',
      link: '/shop',
    }, {
      title: 'CLASS',
      link: '/class',
    }, {
      title: 'JOURNAL',
      link: '/journal',
    }, {
      title: 'CONTACT',
      link: '/contact',
    }
  ]
  return (
    <NavAbsol>
      <NavFrame className='shadow col-lg-12'>
        <Logo className='col-lg-4'>
          <Link href='/' className="nav-item">
            <a className="nav-link linkTxt" href="#">faabs_coffee_roasters</a>
          </Link>
        </Logo>
        <Box className='col-lg-7'>
          <UL className="nav">
            {
              links.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link href={link.link} className="nav-item">
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
  z-index:999;
  background-color: white;
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

  return (
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
  return (
    <span>
      <Link href='/cart'>
        <a>
          <i className="fa fa-cart-plus" />
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
