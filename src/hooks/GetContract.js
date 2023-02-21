import React from 'react';
import { useContract } from 'wagmi';
import VotechainABI from '../contracts/ABIs/VotechainABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x2EB67853Cd2d7795B0D9C952ee89dD8114caC587',
        contractInterface: VotechainABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;