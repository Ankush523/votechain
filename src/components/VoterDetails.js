import React, { useState } from "react";
import GetContract from "../hooks/GetContract.js";
import SocialLogin from "@biconomy/web3-auth";
import "@biconomy/web3-auth/dist/src/style.css";
import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { ethers } from "ethers";
import { useAccount, useProvider, useSigner } from "wagmi";
import votechainabi from '../contracts/ABIs/VotechainABI.json'

const VoterDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [contactnumber, setContactnumber] = useState(null);
  const [sex, setSex] = useState("");

  const contract = GetContract();
  const{data:signer}=useSigner()

  // const tx = {
  //   to:"0xF7bdD875Ca5449B9B98E756B1157264d325BA359",
  //   from : "0x538F207794289005d51234f336FdB387f3b18ded",
  //   value: ethers.utils.parseEther("0.01"),
  //   data:"0x"
  // }

  const { address } = useAccount();
  const [addr, setAddr] = useState('');

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

  const login = async () => {
    await socialLogin.init();
    socialLogin.showWallet();
    if (!socialLogin?.provider) return;
    const provider = new ethers.providers.Web3Provider(socialLogin.provider);
    let smartAccount = new SmartAccount(provider, options);
    const accounts = await provider.listAccounts();
    console.log("EOA address", accounts);
  
      smartAccount = await smartAccount.init();
      const address1 = smartAccount.address;
      setAddr(address1);
      console.log("Smart Account", smartAccount);
      console.log("Smart Account Address", address1);
  
    };
    
    // const transak = async () => {
    //   await socialLogin.init();
    //   if (!socialLogin?.provider) return;
    //   const provider = new ethers.providers.Web3Provider(socialLogin.provider);
    //   let smartAccount = new SmartAccount(provider, options);
    //   smartAccount = await smartAccount.init();
    //   console.log("Smart Account", smartAccount);
    //   const txResponse = await smartAccount.deployWalletUsingPaymaster();
    //   console.log(txResponse);
    //   const txResponse2 = await smartAccount.sendGaslessTransaction({ transaction: tx });
    //   console.log(txResponse2);
    // }

  const voterdetails = async () => {
    if(name !== '' && age !== null && contactnumber !== null && sex !== ''){
      let iface = new ethers.utils.Interface(votechainabi)
      let det = iface.encodeFunctionData("userregister",[name, age, contactnumber, sex])
      console.log(det)
      await socialLogin.init();
      if (!socialLogin?.provider) return;
      const provider = new ethers.providers.Web3Provider(socialLogin.provider);
      let smartAccount = new SmartAccount(provider, options);
      smartAccount = await smartAccount.init();
      console.log("Smart Account", smartAccount);
      const tx={
        to:"0xfAC4Eb80D00182577c549c5A6eE4388a0deE3caD",
        from:smartAccount.address,
        value:ethers.utils.parseEther("0"),
        data:det
      }
      const txResponse2 = await smartAccount.sendGaslessTransaction({ transaction: tx });
      console.log(txResponse2);
      // const tx = await contract.userregister(name, age, contactnumber, sex);
      // console.log(tx);
    }else{
      alert("Fill All Details")
    }
  };

  

  return (
    <div>
      <div className="flex flex-row justify-between  mx-[40px]">
        <label className="text-[55px] text-purple-800 font-montserrat">WELCOME TO VOTER'S PORTAL</label>
        <button className="text-xl text-white bg-purple-800 my-[20px] px-[20px] rounded-xl shadow-2xl border border-purple-800 hover:text-purple-800 hover:bg-white" onClick={() => login()}>Smart Wallet : {(addr.toString()).slice(0,8)}...{(addr.toString()).slice(37)}</button>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center w-[100vw] h-[fit-content] p-[20px] justify-center px-20">
        <div className='flex flex-col w-[60%] h-[fit-content] shadow-xl rounded-md bg-slate-100 p-[30px]'>
      <label className="font-montserrat text-[30px] mb-10 text-purple-900">Enter Your Details </label>
        <div className="flex flex-row p-5 justify-between">
        <label className=" font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Name:</label>
          <input className="rounded-xl shadow-xl w-[250px]" required type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

        <div className="flex flex-row p-5 justify-between">
        <label className=" font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Age:</label>
          <input className="rounded-xl shadow-xl w-[250px]" type="number" required min="18" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>

        <div className="flex flex-row p-5 justify-between">
        <label className=" font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Contact Number:</label>
          <input className="rounded-xl shadow-xl w-[250px]" required type="number" name="contactnumber" value={contactnumber} onChange={(e) => setContactnumber(e.target.value)}/>
          </div>

        <div className="flex flex-row p-5 justify-between">
        <label className=" font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Gender:</label>
          <input className="rounded-xl shadow-xl w-[250px]" required type="text" name="sex" value={sex} onChange={(e) => setSex(e.target.value)}/>
          </div>
          <div className="pt-8">
          <button type="submit" className=" font-montserrat text-[20px] text-purple-800 w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-white" onClick={()=>voterdetails()}>Submit</button>
          </div>
        </div>
      </div>
      <div className="pl-9">
        <a href='/castvote'><button className=" font-montserrat text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white ">Continue to Vote</button></a>
      </div>
    </div>
    </div>
  );
};

export default VoterDetails;


//0xf7bab634bdedabe02cf63c5799ae3f51e4cfd6882b894a0ed5feb9b9c82cc847

//0x55ca8e81d005ef1ce6bfeccc9fa6dbfc3b51215c970e36134a38e6b242af9e56