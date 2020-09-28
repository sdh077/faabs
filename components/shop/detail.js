import styled from 'styled-components'
import Link from 'next/link'
import { useState, useRef, useEffect } from "react"
import Bracket from '../bracket'
const Detail = ({ itemNo }) => {
    const item = {
        itemNo: 1,
        title: '모건 타운 블랜딩',
        price: 12000,
        stock: 3,
        img: '/img/blending_morgan.png',
        cateNo: 1,
        attribute: [
            {
                key: '노트',
                value: 'cinnamon, sweet, cocoa, molassas, balanced, dark chocolate'
            }, {
                key: '구성',
                value: '과테말라, 인도네시아'
            }, {
                key: '시기',
                value: 'apr, june'
            }, {
                key: '품종',
                value: 'Castillo, Caturra, Colombia, Typica'
            }, {
                key: '가공',
                value: 'aaa'
            },
        ],
        option: [
            {
                title: '중량',
                units: [{
                    no: 1,
                    title: '200g',
                    price: 0
                }, {
                    no: 2,
                    title: '500g',
                    price: 7000
                }, {
                    no: 3,
                    title: '1000g',
                    price: 15000
                }]
            },
            {
                title: '표지',
                units: [{
                    no: 1,
                    title: 'A타입',
                    price: 0
                }, {
                    no: 2,
                    title: 'B타입',
                    price: 0
                }]
            }
        ],
        addopt: [{
            title: '주전자',
            units: [{
                no: 1,
                title: '구리형 주전자',
                price: 100000
            }, {
                no: 2,
                title: '유리 주전자',
                price: 90000
            }]
        }, {
            title: '컵',
            units: [{
                no: 1,
                title: '머그1',
                price: 20000
            }, {
                no: 2,
                title: '머그2',
                price: 22000
            }]
        }]
    }
    return (
        <div className='shopDetailFrame'>
            <Bracket items={['shop', item.title]} />
            <div className='row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={item.img} />
                </div>
                <div className='col-lg-6'>
                    <ItemInfo item={item} />
                </div>
            </div>
            <style jsx>
                {`
                .shopDetailFrame {
                    padding-left: 35px;
                    padding-right: 35px;
                }
            `}
            </style>
        </div>
    )
}
function ItemInfo({ item }) {
    const [choice, setChoice] = useState([])
    const addChocie = (selectItem) =>
        choice.filter(c => c.no === selectItem.no).length !== 0 ?
            null :
            (
                selectItem.cnt = 1,
                selectItem.price += item.price,
                setChoice(choice.concat(selectItem))
            )
    const changeChoice = (value, no) => setChoice(choice.map(c => c.no === no ? ({ ...c, cnt: c.cnt + value }) : c))
    return (
        <div className='info'>
            <div>
                {item.title}
            </div>
            <div>
                {item.price}원
        </div>
            <hr />
            <div>
                {item.attribute.map((attr, index) => (
                    <div key={index}>
                        {attr.key} : {attr.value}
                    </div>
                ))}
            </div>
            <hr />
        조합
            <OptionComb opt={item.option} price={item.price} addChocie={addChocie} />
        독립
            <OptionAlone opt={item.option} addChocie={addChocie} />
            <hr />
            {choice.map(c => (
                <div key={c.no}>
                    {c.title} - {c.cnt}개
                    <button className='btn btn-secondary' onClick={() => changeChoice(1, c.no)}>+</button>
                    <button className='btn btn-secondary' onClick={() => changeChoice(-1, c.no)}>-</button>
                </div>
            ))}
            <div>총 금액: {choice.reduce((acc, c) => acc + c.price * c.cnt, 0)}</div>
            <button>구매</button>
            <button>장바구니</button>
            <style jsx>
                {`
            .info {
                font-weight: 200;
            }
            `}
            </style>
        </div>
    )
}
function OptionComb({ opt, price = 0, addChocie }) {
    const output = (a, b) => ({
        title: a.title + '/' + b.title,
        price: a.price + b.price,
        no: a.no + '#' + b.no
    })
    const title = opt.reduce((acc, o) => acc = acc + (acc !== '' ? '/' : '') + o.title, '')
    const makeOpt = opt.map(o => o.units).reduce((acc, o) => comb(acc, o, output), [])
    return (
        <div>
            <div className='row col-lg-8 selectFrame'>
                <select defaultValue='' className='custom-select' onChange={e => addChocie(makeOpt[e.currentTarget.value])}>
                    <option disabled='true' value=''>{title}</option>
                    {makeOpt.map((o, index) => (
                        <option value={index} key={index}>{o.title} - {price + o.price}원</option>
                    ))}
                </select>
            </div>
            <style jsx>
                {`
                .selectFrame {
                    margin: 10px 0;
                    padding: 0;
                }
            `}
            </style>
        </div>
    )
}
function OptionAlone({ opt, addChocie }) {
    const output = (a, b) => ({
        title: a.title + '/' + b.title,
        price: a.price + b.price,
        no: a.no + '#' + b.no
    })
    const optLength = opt.length;
    const [selection1, setSelection1] = useState('')
    const [selection2, setSelection2] = useState('')
    const selectOpt = (opt, position, idx) => {
        opt[position].position = position
        if (optLength === 1) addChocie(opt[position])
        else {
            idx === 0 ? setSelection1(opt[position]) : setSelection2(opt[position])
        }
    }
    useEffect(() => {
        if (selection1 && selection2) {
            addChocie(output(selection1, selection2))
            setSelection1('')
            setSelection2('')
        }
    });
    return (
        <div>
            {opt.map((o, idx) => (
                <div key={o.title} className='row col-lg-8 selectFrame'>
                    <select value={idx === 0 ? selection1.position || '' : selection2.position || ''} className='custom-select' onChange={e => selectOpt(o.units, e.target.value, idx)}>
                        <option disabled='true' value=''>{o.title}</option>
                        {o.units.map((unit, index) => (
                            <option value={index} key={unit.no}>{unit.title} / {unit.price}원</option>
                        ))}
                    </select>
                </div>
            ))}
            <style jsx>
                {`
                .selectFrame {
                    margin: 10px 0;
                    padding: 0;
                }
            `}
            </style>
        </div>
    )
}
function comb(as, bs, output = null) {
    if (as.length === 0) return bs
    return as.flatMap(a => bs.map(b => output ? output(a, b) : a + b))
}

export default Detail