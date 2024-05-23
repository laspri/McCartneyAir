import React, {useEffect, useState} from "react";
import axios from "axios";

import Header from "./Divs/Header.js";
import Bottom from "./Divs/Bottom.js";

function Main() {
    const [aqi, setAQI] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://euurhojuiuys3off45i2vdb6ui0mwdwa.lambda-url.us-east-1.on.aws/');
            setAQI(response.data.aqi);
            setLoading(false);
          } catch (err) {
            setError(err);
            setLoading(false);
          }
        };
      
        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-full items-center">
            <div className='flex flex-col h-full w-full md:max-w-lg relative items-center gap-8 content-center mb-8'>
                <Header aqi={aqi} error={error} loading={loading}/>
                <Bottom aqi={aqi} error={error} loading={loading}/>
            </div>
        </div>
    )
};

export default Main;