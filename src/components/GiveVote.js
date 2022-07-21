import React from 'react';
import GetContract from '../hooks/GetContract';
const GiveVote = () => {

    const contract = GetContract()
    return (
        <div>
            <h1>
                WELCOME TO VOTING PORTAL
            </h1>
            <div>
                <label>{}</label>
            </div>
        </div>
    );
}
 
export default GiveVote;