import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function Gallery() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(function (response) {
            setItems(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
    }, []);
    return (
        <div>
            <h3>This is gallery</h3>
            <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
            {
                items.map((item) => {
                    return <li key={item.id} style={{margin: '5px', cursor: 'pointer'}}>
                        <Link to={`/PDP/${item.id}`}>{item.title}</Link>
                    </li>
                })
            }
            </ul>
        </div>
    )
}

export default Gallery
