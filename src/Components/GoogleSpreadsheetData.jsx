import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const GoogleSpreadsheetData = () => {
    const [data, setData] = useState([]);
    const spreadsheetId = '1KtJlLUEVSgAoKANNgjv943oMnF-ZZD39EIy3Jxo6RTU';
    const apiKey = import.meta.env.VITE_API_KEY;
    const range = 'A:D';

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
            try {
                const response = await axios.get(url);
                setData(response.data.values);
            } catch (error) {
                console.error('Ошибка при получении данных', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col h-screen" >
            <div className="grow flex-col justify-center align-middle items-center m-4">
                <Carousel responsive={responsive}>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className='m-4'>
                            <div className='font-bold' >
                                <p>{row[2] + " (" + row[0] + ")"}</p>
                            </div>
                            <div className='text-justify text-sm' >
                                {row[3]}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default GoogleSpreadsheetData;
