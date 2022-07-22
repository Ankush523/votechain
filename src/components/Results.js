import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';
const Results = () => {

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
        <div className='flex flex-col bg-purple-900 items-center justify-center'>
            <br/>
            <br/>
            <button className='text-[20px] w-[fit-content] h-[fit-content] rounded-xl hover:shadow-xl p-[8px] bg-white' onClick={getList}>View Standings</button>
            <br/>
            <br/>
            <div className='w-[50%] h-[fit-content] shadow-xl rounded-xl bg-white p-[40px]'>
                <div className='pb-[50px]'>
                <label className='text-[25px] font-montserrat shadow-xl text-white bg-purple-800 w-[fit-content] py-2 px-4 rounded-xl'>Current Standings</label>
                </div>
                <div className='flex flex-row w-[100%] font-montserrat justify-around pb-10 text-[30px]'>
                        <label className='text-purple-600'>Political Party</label>
                        <label className='text-purple-600'>Scores</label>
                        </div>
                <div className='flex flex-col-reverse w-[100%] h-[fit-content]' >
            {
                
                 Object.keys(lists).map((list,index)=>(
                    <div className=''>
                        <div className='flex flex-row w-[100%] justify-around p-1 '>
                        <label className='font-montserrat font-semi-bold text-[20px]'>{lists[index].party_name}</label>
                        <label className='font-montserrat font-semi-bold text-[20px]'>{(lists[index].count).toString()}</label>
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
 
export default Results;