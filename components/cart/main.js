import styled from 'styled-components'
import Link from 'next/link'
import Carousels from '../carousels';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addCart } from '../../store/cart'

const Main = () => {
    const items = useSelector((cart) => cart.items)
    const dispatch = useDispatch()
    useEffect(() => {
    })
    return(
        <div>
            {items.length}개
            cart {items&&items.map(i => (
                <div key={i.no}>{i.title}</div>
            ))}
        </div>
    )
}

export default Main