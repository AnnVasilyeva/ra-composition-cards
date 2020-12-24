import React from 'react';

export default function Card({item, image}) {
    return (
        <div className="card" style={{width: 18 + 'rem', marginTop: 30, textAlign: 'left'}}>
            {image && <img src={image} className="card-img-top" alt="Card image cap" style={{width: 100 + '%', height: 100 + '%'}}/>}
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}