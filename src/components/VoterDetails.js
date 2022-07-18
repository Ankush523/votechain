import React, { useState } from "react";
import GetContract from "../hooks/GetContract.js";
const VoterDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [contactnumber, setContactnumber] = useState("");
  const [sex, setSex] = useState("");

  const contract = GetContract();

  const details = async () => {
    await contract.register(name, age, contactnumber, sex);
  };

  return (
    <div>
      <div className="text-[55px] text-purple-800 font-montserrat">
        <h1>WELCOME TO VOTER'S PORTAL</h1>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center w-[100vw] h-[fit-content] p-[20px] justify-center px-20">
          <div className="w-[60%] flex flex-col h-[fit-content] shadow-xl rounded-xl bg-slate-100 p-[30px]">
            <label className="font-montserrat text-[30px] mb-10 text-purple-900">Enter Your Details </label>
            <div className="flex flex-row p-5  justify-between">
              <label className="font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Name :</label>
              <input className="rounded-xl shadow-xl w-[250px]" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex flex-row p-5 justify-between">
              <label className="font-montserrat   w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Age :</label>
              <input className="rounded-xl shadow-xl w-[250px]" onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className="flex flex-row p-5 justify-between">
              <label className="font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Contact Number :</label>
              <input className="rounded-xl shadow-xl w-[250px]" onChange={(e) => setContactnumber(e.target.value)}/>
            </div>
            <div className="flex flex-row p-5 justify-between">
              <label className="font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px] text-purple-600">Gender :</label>
              <input className="rounded-xl shadow-xl w-[250px]" onChange={(e) => setSex(e.target.value)}/>
            </div>
            <div className="pt-8">
            <button className=" font-montserrat text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white " onClick={details}>Submit Details</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-9">
        <button className=" font-montserrat text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white ">Continue to Vote</button>
      </div>
    </div>
  );
};

export default VoterDetails;
