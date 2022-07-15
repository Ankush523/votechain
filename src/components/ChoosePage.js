import React from 'react';
const ChoosePage = () => {
    return (
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] justify-around'>
            <a href='/voter' ><button>Continue as Voter</button></a>
            <a href='/candidate' ><button>Register as Candidate</button></a>
        </div>
    );
}
 
export default ChoosePage;