import React from 'react';
import { useContract } from 'wagmi';
import VotechainABI from '../contracts/ABIs/VotechainABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xB271617bC381e6Bd8AedC331219e53376848fA0C',
        contractInterface: VotechainABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;