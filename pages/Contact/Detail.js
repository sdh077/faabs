import React from 'react';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import NaverMapAPI from '../../components/naverMap/NaverMapAPI';

const Detail = () => {
    return(
        <RenderAfterNavermapsLoaded
        ncpClientId={'og6yn3xm9s'}
        error={<p>Maps Load Error</p>}
        loading={<p>로딩중...</p>}>
            <NaverMapAPI />

        </RenderAfterNavermapsLoaded>
    )
}

export default Detail