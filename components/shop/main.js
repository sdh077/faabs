import styled from 'styled-components'
import Link from 'next/link'
import { useState, useRef, useEffect } from "react"

const Main = () => {
    const cates = [
        {
            cateNo: 0,
            title: 'ALL'
        }, {
            cateNo: 1,
            title: 'Blend'
        }, {
            cateNo: 2,
            title: 'Single Origin'
        }, {
            cateNo: 3,
            title: 'Cold Brew'
        }, {
            cateNo: 4,
            title: 'Drip Bag'
        }, {
            cateNo: 5,
            title: 'Subscription'
        },
    ]
    const items = [
        {
            itemNo: 1,
            title: 'test1',
            price: '',
            stock: 3,
            img: 'img/blending_morgan.png',
            cateNo: 1
        }, {
            itemNo: 2,
            title: 'test2',
            price: '',
            stock: 3,
            img: 'img/blending_morgan.png',
            cateNo: 1
        }, {
            itemNo: 3,
            title: 'test3',
            price: '',
            stock: 3,
            img: 'img/singleorigin_1.png',
            cateNo: 2
        }, {
            itemNo: 4,
            title: 'test4',
            price: '',
            stock: 3,
            img: 'img/coldbrew_1.png',
            cateNo: 3
        },
    ]
    const [choice, setChoice] = useState(0)

    return (
        <>
            <div className='cate'>
                {cates.map(c => (
                    <CateTitle onClick={() => setChoice(c.cateNo)} className='cateTitle' key={c.cateNo} active={c.cateNo === choice}>
                        {c.title}
                    </CateTitle>
                ))}
            </div>
            <div className='row'>
                {items.filter(i => choice === 0 ? true : i.cateNo === choice).map(i => (

                    <Item key={i.itemNo} i={i}>
                    </Item>
                ))}
            </div>
            <style jsx>
                {`
                    .cate {
                        text-align: center;
                        margin-top: 150px;
                        margin-bottom: 50px;
                    }
                `}
            </style>
        </>
    )
}
const CateTitle = styled.span`
    font-size: 14px;
    font-weight: ${props => props.active ? 600 : 400};
    margin-left: 10px;
    margin-right: 10px;
    ${props => props.active && `
    color: blue;
  `}
    
`
function Item({ i }) {

    return (
        <div className='col-lg-4'>
            <Link href={'shop/' + i.itemNo} itemNo={i.itemNo}>
                <a>
                    <ItemFrame>
                        <img src={i.img} />
                        <ItemTitle>
                            {i.title}
                        </ItemTitle>
                    </ItemFrame>
                </a>
            </Link>
        </div>
    )
}
const ItemFrame = styled.div`
    padding:20px;
    text-align: right;
    
`
const ItemTitle = styled.div`
    display: inline-block;
    color: black;
    
`
export default Main