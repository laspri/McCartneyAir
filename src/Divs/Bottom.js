import PropTypes from "prop-types";

import { QualityBar } from '../Components/QualityBar.js';
import { SourceItem } from '../Components/SourceItem.js'

function Bottom({aqi, error, loading}) {
    return(
        <div className='flex flex-col w-full items-center gap-8 px-9'>
            <QualityBar aqi={aqi || 0}/>
            <div className='flex flex-col items-start gap-3 w-full'>
            <div className="w-full text-left font-mono font-bold text-white text-xl tracking-[0] leading-[normal]">
                Conoce más
            </div>
            <SourceItem
                className="!flex-[0_0_auto]"
                desc="Explore la calidad del aire en su ciudad y en todo el mundo. Datos sobre la calidad del aire, herramientas de colaboración y soluciones tecnológicas."
                //image={IQAir}
                name="IQ Air"
                url='https://www.iqair.com/'
            />
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