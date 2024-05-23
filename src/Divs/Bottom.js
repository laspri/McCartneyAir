import PropTypes from "prop-types";

import { QualityBar } from '../Components/QualityBar.js';
import { SourceItem } from '../Components/SourceItem.js'

const list = [
    {
        name: 'IQ Air',
        url: 'https://www.iqair.com/',
        desc: 'Explore la calidad del aire en su ciudad y en todo el mundo. Datos sobre la calidad del aire, herramientas de colaboración y soluciones tecnológicas.',
        image: 'https://cdn.airvisual.net/assets/public-profiles/30142804-61b1-423f-8739-b4b623c5cba4b',
    },
    {
        name: "World Air Quality Index",
        url: 'https://waqi.info/',
        desc: 'Proporciona información en tiempo real sobre la calidad del aire a nivel mundial, con datos actualizados y detallados.',
        image: 'https://waqi.info/images/logo.png',
    },
    {
        name: 'Secretaría Distrital de Ambiente',
        url: 'https://www.ambientebogota.gov.co/calidad-del-aire',
        desc: 'Encuentra las diferentes herramientas que tiene Bogotá para medir su calidad de aire: entre ellos un mapa que se actualiza en tiempo real.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR0RYDkigg48f-LbnBuDvxxVQR4wJ0kbgXX2LWdy-0OjpDmZNEfTo4KtI4cw1ZFk3uRI&usqp=CAU',
    },
    {
        name: 'IDEAM',
        url: 'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental',
        desc: 'Información detallada y actualizada sobre los niveles de contaminación en Colombia, la calidad del aire, el agua y el suelo, y las políticas ambientales del país.',
        image: 'http://www.ideam.gov.co/image/company_logo?img_id=12635&t=1635376267670',
    },
]
function Bottom({aqi, error, loading}) {
    return(
        <div className='flex flex-col w-full items-center gap-8 px-9'>
            <QualityBar aqi={aqi || 0}/>
            <div className='flex flex-col items-start gap-3 w-full'>
            <div className="w-full text-left font-mono font-bold text-white text-xl tracking-[0] leading-[normal]">
                Conoce más
            </div>
            {list.map((item) => (
                <SourceItem
                    className="!flex-[0_0_auto]"
                    desc={item.desc}
                    image={item.image}
                    name={item.name}
                    url={item.url}
                />
            ))}
            </div>
        </div>
    )
}

Bottom.propTypes = {
    aqi: PropTypes.any,
    error: PropTypes.any,
    loading: PropTypes.any,
};

export default Bottom;