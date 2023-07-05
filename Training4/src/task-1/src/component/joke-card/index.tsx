import React from 'react';

type JokeCardProps = {
    id: number,
    type: string,
    setup: string,
    punchline: string,
}
const JokeCard = ({id, type, setup, punchline}: JokeCardProps) => {
    return (
        <div key={id} className="card">
            <h3 className="card-type">{type.toUpperCase()}</h3>
            <div className="card-content">
                <p>A: {setup}</p>
                <p>B: {punchline}</p>
            </div>
        </div>
    );
};

export default JokeCard;