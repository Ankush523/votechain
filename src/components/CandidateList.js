import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';
import { ethers } from 'ethers';
import VotechainABI from '../contracts/ABIs/VotechainABI.json'
import { useSigner } from 'wagmi';

const CandidateList = () => {

    //const contract  = GetContract();
    const{data:signer}=useSigner();
    const contract = new ethers.Contract("0xaF09820bBa2e1f2acb376DeD58964faBbf1439Aa",VotechainABI,signer);
    const[lists,setList] = useState([]);
    
    const getList = async() => {
        var len = await contract.receiveCid();
        console.log(len.toString())
        var parseList = len.toString();

        setList([]);
        for(let i=1;i<=parseList;i++)
        {
            var list = await contract.candidatelist(i);
            console.log(list)
            // eslint-disable-next-line no-loop-func
            setList((lists) => [...lists,list])
        }
    }

    const chooseparty = async(key) => {
        await contract.votecount((key+1).toString());
    }

    return (
        <div className='flex flex-col bg-purple-900 h-fit items-center justify-center'>
            <br/>
            <br/>
            <button className='text-[20px] font-montserrat w-[fit-content] h-[fit-content] rounded-xl hover:shadow-xl p-[8px] bg-white' onClick={getList}>Get List of Candidates</button>
            <br/>
            <div className='w-[50%] h-[fit-content] shadow-xl rounded-xl bg-white p-[30px]'>
                <div className='pb-[50px]'>
                <label className='text-[25px] font-montserrat shadow-xl text-white bg-purple-800 w-[fit-content] py-2 px-4 rounded-xl'>Candidate List</label>
                </div>
                <div className='flex flex-col-reverse w-[100%] h-[fit-content]' >
            {
                 Object.keys(lists).map((list,index)=>(
                    <div key="id" className=''>
                        <div className='flex flex-row w-[100%] justify-around p-1 '>
                        <label className='font-montserrat font-semi-bold text-[20px]'>{lists[index].name}</label>
                        <label className='font-montserrat font-semi-bold text-[20px]'>{lists[index].party_name}</label>
                        <label className='font-montserrat font-semi-bold text-[20px]'>{(lists[index].age).toString()}</label>
                        <label className='font-montserrat font-semi-bold text-[20px]'>{lists[index].region}</label>
                        <button className='bg-purple-100 px-3 rounded-md hover:bg-purple-300' onClick={()=>chooseparty(index)}>Vote</button>
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