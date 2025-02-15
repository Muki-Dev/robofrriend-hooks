import React from 'react';

const Card = ({id,name,email}) => {
    return(
        <div className='tc grow bg-light-green br3 pa3 dib ma2 bw2 shadow-5'>
            <img alt='robots' src={`https://www.robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;