import React, { useState } from "react";
import GetContract from "../hooks/GetContract.js";
import SocialLogin from "@biconomy/web3-auth";
import "@biconomy/web3-auth/dist/src/style.css";
import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { ethers } from "ethers";
import { useAccount, useProvider, useSigner } from "wagmi";
import votechainabi from "../contracts/ABIs/VotechainABI.json";
const CandidateList = () => {
  //const contract  = GetContract();
    const { data: signer } = useSigner();
    const contract = GetContract();
    const { address } = useAccount();
    const [addr, setAddr] = useState("");

    let options = {
        activeNetworkId: ChainId.GOERLI,
        supportedNetworksIds: [
        ChainId.GOERLI,
        ChainId.POLYGON_MAINNET,
        ChainId.POLYGON_MUMBAI,
        ],
        networkConfig: [
        {
            chainId: ChainId.POLYGON_MUMBAI,
            dappAPIKey: "95i8SYBAT.a228ea7a-dc7e-4705-a6f6-88f77d9699df",
            providerUrl: "<YOUR_PROVIDER_URL>",
        },
        {
            chainId: ChainId.POLYGON_MAINNET,
            dappAPIKey: "95i8SYBAT.a228ea7a-dc7e-4705-a6f6-88f77d9699df",
            providerUrl: "<YOUR_PROVIDER_URL>",
        },
        ],
    };

    const socialLogin = new SocialLogin();
    const [lists, setList] = useState([]);

    const getList = async () => {
        var len = await contract.receiveCid();
        console.log(len.toString());
        var parseList = len.toString();

        setList([]);
        for (let i = 1; i <= parseList; i++) {
        var list = await contract.candidatelist(i);
        console.log(list);
        setList((lists) => [...lists, list]);
        }
    };

    const chooseparty = async (key) => {
        var len = await contract.receiveCid();
        let iface = new ethers.utils.Interface(votechainabi);
        let det = iface.encodeFunctionData("votecount", [len]);
        console.log(det);
        await socialLogin.init();
        if (!socialLogin?.provider) return;
        const provider = new ethers.providers.Web3Provider(socialLogin.provider);
        let smartAccount = new SmartAccount(provider, options);
        smartAccount = await smartAccount.init();
        console.log("Smart Account", smartAccount);
        const tx = {
        to: "0xfAC4Eb80D00182577c549c5A6eE4388a0deE3caD",
        from: smartAccount.address,
        value: ethers.utils.parseEther("0"),
        data: det,
        };
        // const txResponse = await smartAccount.deployWalletUsingPaymaster();
        // console.log(txResponse);
        const txResponse2 = await smartAccount.sendGaslessTransaction({transaction: tx});
        console.log(txResponse2);

        await contract.votecount((key + 1).toString());
    };

    return (
        <div className="flex flex-col bg-purple-900 h-fit items-center justify-center h-[100vh]">
            <br />
            <br />
            <button className="text-[20px] font-montserrat w-[fit-content] h-[fit-content] rounded-xl hover:shadow-xl p-[8px] bg-white" onClick={() => getList()}>Get List of Candidates</button>
            <br />
            <div className="w-[50%] h-[fit-content] shadow-xl rounded-xl bg-white p-[30px]">
                <div className="pb-[50px]">
                    <label className="text-[25px] font-montserrat shadow-xl text-white bg-purple-800 w-[fit-content] py-2 px-4 rounded-xl">Candidate List</label>
                </div>
                <div className='flex flex-row w-[100%] font-montserrat justify pb-5 text-[20px] border-b border-b-purple-800'>
                    <label className='text-purple-600 text-left w-[20%]'>Leader</label>
                    <label className='text-purple-600 text-center w-[20%]'>Party</label>
                    <label className='text-purple-600 w-[20%]'>Age</label>
                    <label className='text-purple-600 w-[20%]'>Region</label>
                    <label className='text-purple-600 w-[20%]'>Vote</label>
                </div>
                <div className="flex flex-col-reverse w-[100%] h-[fit-content] pt-5">
                    {lists.map((list, index) => (
                    <div key="id" className="mb-[40px]">
                        <div className="flex flex-row w-[100%] p-1">
                            <label className="font-montserrat w-[20%] text-left font-semi-bold text-[20px]">{list.name}</label>
                            <label className="font-montserrat w-[20%] text-center font-semi-bold text-[20px]">{list.party_name}</label>
                            <label className="font-montserrat w-[20%] font-semi-bold text-[20px]">{(list.age).toString()}</label>
                            <label className="font-montserrat w-[20%] font-semi-bold text-[20px]">{list.region}</label>
                            <button className="bg-purple-100 px-3 ml-11 w-[10%] border border-purple-800 shadow-xl rounded-md hover:bg-purple-300" onClick={() => chooseparty(index)}>Vote</button>
                        </div>
                    </div>
                    )
                )}
                </div>
            </div>
        </div>
    );
    };

export default CandidateList;