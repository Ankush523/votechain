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
      <div className="text-[55px] text-purple-800 font-montserrat pb-20">
        <h1>WELCOME TO VOTER'S PORTAL</h1>
      </div>
      <div>
        <div className="flex flex-col items-center w-[100vw] h-[fit-content] p-[20px] justify-center px-20">
          <div className="w-[60%] flex flex-col h-[fit-content] shadow-xl rounded-xl  p-[30px]">
            <label className="font-montserrat text-[30px] mb-10">Enter your Details </label>
            <div className="flex flex-row p-5  justify-between">
              <label className="font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px]">Name :</label>
              <input className="rounded-xl shadow-xl" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex flex-row p-5 justify-between">
              <label className="font-montserrat   w-[fit-content] p-1 px-2 py-2 text-[20px]">Age :</label>
              <input className="rounded-xl shadow-xl" onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className="flex flex-row p-5 justify-between">
              <label className="font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px]">Contact Number :</label>
              <input className="rounded-xl shadow-xl" onChange={(e) => setContactnumber(e.target.value)}/>
            </div>
            <div className="flex flex-row p-5 justify-between">
              <label className="font-montserrat  w-[fit-content] p-1 px-2 py-2 text-[20px]">Gender :{" "}</label>
              <input className="rounded-xl shadow-xl" onChange={(e) => setSex(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterDetails;
