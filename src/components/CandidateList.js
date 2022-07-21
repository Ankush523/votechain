import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';
const CandidateList = () => {

    const contract  = GetContract();
    const[lists,setList] = useState([]);
    
    const getList = async() => {
        var len = await contract.receiveCid();
        var parseList = len.toString();

        setList([]);
        for(let i=1;i<=parseList;i++)
        {
            var list = await contract.candidatelist(i);
            setList((lists) => [...lists,list])
        }
    }

    const chooseparty = async(key) => {
        await contract.votecount((key+1).toString());
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <br/>
            <br/>
            <button onClick={getList}>Get List of Candidates</button>
            <br/>
            <div className='w-[50%] h-[fit-content] shadow-xl rounded-xl bg-white p-[30px]'>
                <label className='text-[20px] font-mono text-white bg-black w-[fit-content] py-2 px-4 rounded-xl'>Candidate List</label>
                <br/>
                <br/>
                <div className='flex flex-col-reverse w-[100%] h-[fit-content]' >
            {
                 Object.keys(lists).map((list,index)=>(
                    <div className=''>
                        <div className='flex flex-row w-[100%] justify-around border-2 rounded-md p-2 '>
                        <label className='font-mono font-semi-bold text-[20px]'>{lists[index].name}</label>
                        <label className='font-mono font-semi-bold text-[20px]'>{lists[index].party_name}</label>
                        <label className='font-mono font-semi-bold text-[20px]'>{(lists[index].age).toString()}</label>
                        <label className='font-mono font-semi-bold text-[20px]'>{lists[index].region}</label>
                        <button onClick={()=>chooseparty(index)}>Vote</button>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    );
}
 
export default CandidateList;