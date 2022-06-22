import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './styles.scss'

export function Sport() {

    const { id } = useParams();

    const [sport, setSport] = useState([]);

    useEffect(() => {
        async function getSport() {
            const response = await fetch(`https://sports.api.decathlon.com/sports/${id}`);
            const data = await response.json();
            setSport(data.data);
        }
        getSport();
    }, [id]);

    return(
        <>
            <div className='container-sport'>
                <div className='title'>{sport?.attributes?.name}</div>

                    <div className='image'><img src={sport?.relationships?.images?.data[0]?.url} alt={sport?.attributes?.name}/></div>
           
                <div className='description'>Description</div>
                <div className='text'>{sport?.attributes?.description}</div>
                <div className='hastag'>{sport?.relationships?.tags?.data.map( item => `#${item}`).join(', ')}</div>
            </div>
        </>
    )
}