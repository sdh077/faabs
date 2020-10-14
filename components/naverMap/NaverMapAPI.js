import React from 'react';
const NaverMapAPI = () => {
  console.log('console', typeof window)
  if (typeof window !== 'undefined')
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'}
        style={{
          width: '100%',
          height: '85vh'
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
        defaultZoom={13} />
    )
  else
    return <></>
}

export default NaverMapAPI;