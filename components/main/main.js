import styled from 'styled-components'
import Link from 'next/link'
import Carousels from '../carousels';
const Main = () => {
    const imgs = [
        '/img/faabs1.jpg',
        '/img/faabs2.jpg',
        '/img/faabs3.jpg',
    ];
    return(
        <>
            <Carousels imgs={imgs}/>
        </>
    )
}

export default Main