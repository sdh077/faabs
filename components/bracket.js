import styled from 'styled-components'
import { useState, useRef, useEffect } from "react"

const Bracket = ({ items }) => {
    const html = <span>hi</span>
    console.log(items)
    return (
        <>
            <div className='frame'>
                {items.map((i, index) => (
                    <>
                        {index!==0 && <span> - </span>}
                        <span key={index}>{i}</span>
                    </>
                ))}
            </div>
            <style jsx>
                {`
                .frame {
                    margin-left : 35px;
                    margin-bottom: 10px;
                    padding-top: 10px;
                }
            `}
            </style>
        </>
    )
}

export default Bracket