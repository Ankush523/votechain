import React from 'react';
const ChoosePage = () => {
    return (
        <div>
            <label className='text-[55px] font-montserrat text-purple-800 '>WELCOME TO INDIA'S FIRST</label>
            <br/>
            <label className='text-[55px] font-montserrat text-purple-800'>DECENTRALIZED VOTING PLATFORM</label>
            <br/>
            <br/>
            <br/>
            <div className='flex flex-row text-[20px] text-left text-purple-500 justify-around'>
            <p >
                <p className='text-[25px] w-[700px] text-purple-800 font-montserrat'>Welcome to VOTECHAIN, where we are revolutionizing the way democratic processes are conducted. Our platform offers a secure, transparent, and tamper-proof way for individuals to cast their votes and have their voices heard.</p>
                
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
            <a href='/result'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>View Standings</button></a>
        </div>
        </div>
    );
}
 
export default ChoosePage;