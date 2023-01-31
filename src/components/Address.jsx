import { useState } from 'react';

function Address({ address, index }) {

    const [Associate, setAssociation] = useState(false)

    const addAddress = () => {
        setAssociation(!Associate)
    }

    return (
        <>
            <div key={index} className={Associate ? 'associated addressbox' : 'addressbox'} >
                <button onClick={addAddress}>
                    {Associate ? 'Revoke' : 'Associate'}
                </button>
                <p>Address Id: {index + 1}</p>
                <p>Street Address: {address.StreetNumber}</p>
                <p>Street Name: {address.StreetName}</p>
                <p>Street Type: {address.StreetType}</p>
                <p>City: {address.city}</p>
                <p>Zip: {address.zip}</p>
            </div>
        </>
    )
}

export default Address