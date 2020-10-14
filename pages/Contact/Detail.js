import React, { useState } from 'react';
import dynamic from 'next/dynamic'

const RenderAfterNavermapsLoaded = dynamic(
    () => import('react-naver-maps'),
    { ssr: false }
)
const NaverMapAPI = dynamic(
    () => import('../../components/naverMap/NaverMapAPI'),
    { ssr: false }
)
const Detail = () => {
    return (
        <RenderAfterNavermapsLoaded
            clientId='og6yn3xm9s'
            error={<p>Maps Load Error</p>}
            loading={<p>로딩중...</p>}>
            <NaverMapAPI />

        </RenderAfterNavermapsLoaded>
    )
}

export default Detail