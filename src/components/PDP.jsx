import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PDP({match}) {
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`).then(function (response) {
            setItem(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
    }, [match.params.id]);
    return (
        <div>
            <h3>This is PDP</h3>
            {
                JSON.stringify(item)
            }
        </div>
    )
}

export default PDP;
