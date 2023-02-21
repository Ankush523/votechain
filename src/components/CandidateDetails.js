import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';
const CandidateDetails = () => {
    const[name,setName] = useState('');
    const[partyname,setPartyname] = useState('');
    const[age,setAge] = useState(null);
    const[region,setRegion] = useState('');

    const contract = GetContract();

    const candidatedetails = async () => {
        if(name !== '' && partyname !== '' && age !== null && region !== ''){
          await contract.candidateregister(name, partyname, age, region);
        }else{
          alert("Fill All Details")
        }
      };

    return (
        <div>
            <div className='flex flex-row justify-between  mx-[40px] mt-[10px]'>
                <label className="text-[55px] text-purple-800 font-montserrat">WELCOME TO CANDIDATE'S PORTAL</label>
                <ConnectButton/>
            </div>
            <div className='p-4'>
                <div className='flex flex-col items-center justify-center w-[100vw] p-[20px] h-[fit-content] px-20'>
                    <div className='flex flex-col w-[60%] h-[fit-content] shadow-xl rounded-md bg-slate-100 p-[30px]'>
                        <label className="font-montserrat text-[30px] mb-10 text-purple-900">Enter Your Details</label>
                        <div className="flex flex-row p-5  justify-between">
                            <label className="font-montserrat  w-[fit-content] px-2 py-2 text-[20px] text-purple-600">Name : </label>
                            <input className="rounded-xl shadow-xl w-[250px]" required type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-row p-5  justify-between">
                            <label className="font-montserrat  w-[fit-content]  px-2 py-2 text-[20px] text-purple-600">PartyName : </label>
                            <input className="rounded-xl shadow-xl w-[250px]" required type="text" name="partyname" onChange={(e) => setPartyname(e.target.value)}/>
                        </div>
                        <div className="flex flex-row p-5  justify-between">
                            <label className="font-montserrat  w-[fit-content]  px-2 py-2 text-[20px] text-purple-600">Age : </label>
                            <input className="rounded-xl shadow-xl w-[250px]" required type="number" name="age" onChange={(e) => setAge(e.target.value)}/>
                        </div>
                        <div className="flex flex-row p-5  justify-between">
                            <label className="font-montserrat  w-[fit-content]  px-2 py-2 text-[20px] text-purple-600">Representing Region : </label>
                            <input className="rounded-xl shadow-xl w-[250px]" required type="text" name="region" onChange={(e) => setRegion(e.target.value)}/>
                        </div>
                        <div className='pt-8'>
                            <button className=" font-montserrat text-[20px] text-purple-900 w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-white" onClick={()=>candidatedetails()}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CandidateDetails;