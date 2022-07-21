import React from 'react';
import { useContract } from 'wagmi';
import VotechainABI from '../contracts/ABIs/VotechainABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x072E8bD83F1ce5C9af88b505eD0559EBA57901Bb',
        contractInterface: VotechainABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;