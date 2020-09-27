import styled from 'styled-components'
import { useState, useRef, useEffect, Fragment } from "react"

const Bracket = ({ items }) => {
    const html = <span>hi</span>
    return (
        <>
            <div className='frame'>
                {items.map((i, index) => (
                    <Fragment key={index}>
                        {index!==0 && <span> - </span>}
                        <span>{i}</span>
                    </Fragment>
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