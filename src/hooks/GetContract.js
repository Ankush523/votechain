import React from 'react';
import { useContract } from 'wagmi';
import VotechainABI from '../contracts/ABIs/VotechainABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xfAC4Eb80D00182577c549c5A6eE4388a0deE3caD',
        contractInterface: VotechainABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;