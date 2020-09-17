import styled from 'styled-components'
import { useState, useRef, useEffect } from "react"

const Bracket = ({ items }) => {
    console.log(items)
    return (
        <>
            <div className='frame'>
                {items.reduce((cur, i, index) => (
                    <span key={index}>{i}</span>
                ))}
            </div>
            <style jsx>
                {`
                .frame {
                    margin-left : 35px;
                }
            `}
            </style>
        </>
    )
}

export default Bracket