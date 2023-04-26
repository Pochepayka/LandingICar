import React from "react";
import "./Main.css";


const Map = ({coordinates}) => {
    const coordX = coordinates[0];
    const coordY  = coordinates[1];
    return (
    <div>
        <iframe src = {`https://yandex.ru/map-widget/v1/?ll=${coordX}%2C${coordY}&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY3ODgyNBJD0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCS0LDRgNGI0LDQstGB0LrQvtC1INGI0L7RgdGB0LUsIDHRgTEtMiIKDe6AFkIV5NBeQg%2C%2C&z=14.88`} 
        className="map"></iframe>
    </div>);
}

    

export default Map;