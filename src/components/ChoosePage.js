import React from 'react';
const ChoosePage = () => {
    return (
        <div>
            <label className='text-[40px] font-serif '>WELCOME TO INDIA'S FIRST</label>
            <br/>
            <label className='text-[40px] font-serif'>DECENTRALIZED VOTING PLATFORM</label>
            <br/>
            <br/>
            <br/>
            <p className='flex flex-row pl-[20px] text-[20px] text-left'>
                Our Aim is to make India's Voting System : 
                <br/>More secure
                <br/>Transparent
                <br/>Reliable and 
                <br/>Immutable
            </p>
            <br/>
            <br/>
            <p className='text-[20px] '>
                VOTE FROM ANY TIME, ANYWHERE WITHOUT ANY HASSLE
            </p>
            <br/>
            <br/>
            <label className='text-[20px]'>Let's Get Started</label>
            <br/>
            <br/>
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-around'>
            <a href='/voter'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[4px]'>Continue as Voter</button></a>
            <a href='/candidate'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[4px]'>Register as Candidate</button></a>
        </div>
        </div>
    );
}
 
export default ChoosePage;