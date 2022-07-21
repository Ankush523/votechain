import React from 'react';
const ChoosePage = () => {
    return (
        <div>
            <label className='text-[55px] font-montserrat text-purple-800'>WELCOME TO INDIA'S FIRST</label>
            <br/>
            <label className='text-[55px] font-montserrat text-purple-800'>DECENTRALIZED VOTING PLATFORM</label>
            <br/>
            <br/>
            <br/>
            <div className='flex flex-row text-[20px] text-left text-purple-500 justify-around'>
            <p >
                <label className='text-[30px] text-purple-800 font-montserrat'>Our Aim is to make India's Voting System :</label>
                <br/>More secure
                <br/>Transparent
                <br/>Reliable and 
                <br/>Immutable
            </p>
            <img className='w-[30vw] h-[35vh]' src='https://scientifica.ch/wp-content/uploads/2021/07/119_provotum-system-xtra-small.png'/>
            </div>
            <br/>
            <br/>
            <p className='text-[40px] text-purple-800 font-montserrat'>
                VOTE FROM ANYWHERE, ANY TIME WITHOUT ANY HASSLE
            </p>
            <br/>
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-around'>
            <a href='/voter'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Continue as Voter</button></a>
            <a href='/candidate'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Register as Candidate</button></a>
            <a href='/result'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>View Results</button></a>
        </div>
        </div>
    );
}
 
export default ChoosePage;