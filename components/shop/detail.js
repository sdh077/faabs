import styled from 'styled-components'
import Link from 'next/link'
import { useState, useRef, useEffect } from "react"
import Bracket from '../bracket'
const Detail = ({ itemNo }) => {
    const [choice, setChoice] = useState(0)
    const item = {
        itemNo: 1,
        title: 'test1',
        price: '',
        stock: 3,
        img: '/img/blending_morgan.png',
        cateNo: 1
    }
    return (
        <>
            <Bracket items={['shop', item.title]} />
            <span>
                <img src={item.img} />
            </span>
        </>
    )
}
export default Detail