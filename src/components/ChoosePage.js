import React from 'react';
const ChoosePage = () => {
    return (
        <div>
            <label className='text-[50px] font-serif text-purple-800'>WELCOME TO INDIA'S FIRST</label>
            <br/>
            <label className='text-[50px] font-serif text-purple-800'>DECENTRALIZED VOTING PLATFORM</label>
            <br/>
            <br/>
            <br/>
            <div className='flex flex-row pl-[20px] text-[20px] text-left text-purple-500'>
            <p >
                <label className='text-[30px] text-purple-800'>Our Aim is to make India's Voting System :</label>
                <br/>More secure
                <br/>Transparent
                <br/>Reliable and 
                <br/>Immutable
            </p>
            </div>
            <br/>
            <br/>
            <p className='text-[40px] text-purple-800'>
                VOTE FROM ANYWHERE, ANY TIME WITHOUT ANY HASSLE
            </p>
            <br/>
            <br/>
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-around'>
            <a href='/voter'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Continue as Voter</button></a>
            <a href='/candidate'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Register as Candidate</button></a>
        </div>
        </div>
    );
}
 
export default ChoosePage;