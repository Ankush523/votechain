import React, { useState } from 'react';
import GetContract from '../hooks/GetContract.js';
const VoterDetails = () => {

    const[name,setName] = useState('');
    const[age,setAge] = useState(0);
    const[contactnumber,setContactnumber] = useState('');

    const contract = GetContract();

    const details = async () => {
        await contract.register(name,age,contactnumber)
    }

    return (
        <div>
            <div className='text-[55px] text-purple-800 font-montserrat pb-10'>
                <h1>WELCOME TO VOTER'S PORTAL</h1>
            </div>
            <div>
            <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-between'>
            <br/>
            <label className='font-montserrat  w-[fit-content] p-1 px-2 py-2'>Name : </label>
            <input className='rounded-xl shadow-xl' onChange={e=>setName(e.target.value)} />
            <br/>
            </div>
            <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-between'>
            <br/>
            <label className='font-montserrat   w-[fit-content] p-1 px-2 py-2'>Age : </label>
            <input className='rounded-xl shadow-xl' onChange={e=>setAge(e.target.value)} />
            <br/>
            </div>
            <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-between'>
            <br/>
            <label className='font-montserrat  w-[fit-content] p-1 px-2 py-2'>Contact Number : </label>
            <input className='rounded-xl shadow-xl' onChange={e=>setContactnumber(e.target.value)} />
            <br/>
            </div>
            </div>
        </div>
    );
}
 
export default VoterDetails;