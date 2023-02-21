import React, { useState } from "react";
import GetContract from "../hooks/GetContract.js";
const VoterDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [contactnumber, setContactnumber] = useState(null);
  const [sex, setSex] = useState("");

  const contract = GetContract();

  const voterdetails = async () => {
    if(name !== '' && age !== null && contactnumber !== null && sex !== ''){
      await contract.userregister(name, age, contactnumber, sex);
    }else{
      alert("Fill All Details")
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between  mx-[40px]">
        <label className="text-[55px] text-purple-800 font-montserrat">WELCOME TO VOTER'S PORTAL</label>
        <h1>Smart Wallet</h1>
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
