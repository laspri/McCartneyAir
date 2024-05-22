import PropTypes from "prop-types";

import { HeaderInfo } from "../Components/HeaderInfo.js";
import { QualityCounter } from '../Components/QualityCounter.js';
import BackgroundImage from '../Assets/Background.jpg';

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const date = new Date();

const aqiData = [
    { min: 0, max: 50, data: { r1: 'un gran momento', r2: "para estar activo al aire libre." } },
    { min: 51, max: 100, data: { r1: 'un buen momento', r2: "para estar activo al aire libre." } },
    { min: 101, max: 150, data: { r1: 'un buen momento', r2: "SOLO para actividades exteriores cortas. Para actividades más extensas, tomar más descansos." } },
    { min: 151, max: 200, data: { r1: 'un mal momento', r2: "para realizar actividades exteriores. Si se realizan, tomar más descansos y hacer actividades de menor intensidad, o hacerlas en interiores." } },
    { min: 201, max: 300, data: { r1: 'un pesimo momento', r2: "para realizar cualquier actividad exterior. Realizar todas las actividades en interiores o programarlas para otro momento." } },
    { min: 301, data: { r1: 'un momento peligroso', r2: "para salir. Evitar a toda costa la exposición al aire libre." } },
];

function getAQIData(aqi) {
    for (let range of aqiData) {
        if (aqi >= range.min && range.max ? aqi <= range.max : true) {
        return range.data;
        }
    }
    return null
}

function Header({aqi, error, loading}) {
    let data = getAQIData(aqi);

    return (
        <div className='transition-all relative w-full self-stretch content-center items-center justify-center flex flex-col flex-[0_0_auto] rounded-b-[60px] gap-9 px-6 py-8'> 
            <div className='absolute flex-none w-full h-full bg-cover opacity-30 bg-[50%_50%] rounded-b-[60px]' style={{backgroundImage: `url(${BackgroundImage})`}} />
            <div className="flex w-full items-start justify-between relative flex-[0_0_auto]">
                <HeaderInfo className="!flex-[0_0_auto]" primary="BOGOTÁ" secondary="COLOMBIA" />
                <HeaderInfo className="!flex-[0_0_auto]" primary={`${date.getDate()} ${months[date.getMonth()].toUpperCase()}`} secondary={date.getFullYear()} isRight={true} />
            </div>
            <QualityCounter number={loading ? "..." : (aqi || (error ? "ERROR" : "..."))}/>
            <p className="relative w-full font-sans font-normal text-white text-[15px] text-base text-center  tracking-[0] leading-[normal]">
                {loading ? "" : (aqi ? "Ahora es " : "")}
                <span className="font-semibold"> {loading ? "" : (aqi ? data.r1 : (error ? "Hubo un error al cargar los datos" : ""))}</span>
                {loading ? "" : (aqi ? " "+data.r2 : "")}
            </p>
        </div>
    )
};

Header.propTypes = {
    aqi: PropTypes.any,
    error: PropTypes.any,
    loading: PropTypes.any,
};

export default Header;