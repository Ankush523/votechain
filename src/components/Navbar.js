import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
    return (
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] shadow-xl justify-between'>
            <label className='font-bold text-[50px] text-purple-700 font-light p-2 text-center text-2xl rounded-full' >
                VoteChain
            </label>
            <ConnectButton/>
        </div>
    );
}
 
export default Navbar;