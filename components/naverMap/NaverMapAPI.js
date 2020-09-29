import React from 'react';

import { NaverMap } from 'react-naver-maps';

const naverMapAPI = () => {
  return (
    <NaverMap 
    mapDivId={'maps-getting-started-uncontrolled'}
    style={{
      width: '100%',
      height: '85vh'
    }}
    defaultCenter={{lat: 37.554722, lng: 126.970833}}
    defaultZoom={13}/>
  )
}

export default naverMapAPI;