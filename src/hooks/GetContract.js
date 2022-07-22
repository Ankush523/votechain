import React from 'react';
import { useContract } from 'wagmi';
import VotechainABI from '../contracts/ABIs/VotechainABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x8Ef7e2bb8A4aA85e987b4CE8e1b92156Fc3479CF',
        contractInterface: VotechainABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;