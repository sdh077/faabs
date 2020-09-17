import styled from 'styled-components'
import { useState, useRef, useEffect } from "react"

const Carousels = ({imgs}) => {
    const slideRef = useRef(null);
    const [active, setActive] = useState(0)

    const nextSlide = () => 
        setActive(active >= imgs.length -1 ? 0 : active + 1);
    const prevSlide = () => 
        setActive(active === 0 ? imgs.length - 1 : active - 1);
    useEffect(() => {
        slideRef.current.style.transform = `translate3d(-${active * 100}%, 0px, 0px)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [active]);
    return (
        <>
            <Carousel>
                <CarouselInner ref={slideRef}>
                {imgs.map((img, i) => (
                        <CarouselImg src={img} key={i}/>  
                ))}
                </CarouselInner>
                <span className="btn left" onClick={prevSlide}>Previous</span>
                <span className="btn right" onClick={nextSlide}>Next</span>
            </Carousel>
            <style jsx>
            {`
                .btn {
                    position: absolute;
                    top: 50%;
                }
                .left {
                    left: 5%;
                }
                .right {
                    right: 5%;
                }
            `}
            </style>
        </>
    )
}
const Carousel = styled.div`
    width: 100%;
    height: 600px;
    overflow: hidden;
    position:relative;
`
const CarouselInner = styled.div`
    display: flex;
`
const CarouselImg = styled.img`
    display: flex;
    width: 100%;
    margin-top: -20%;
`

export default Carousels