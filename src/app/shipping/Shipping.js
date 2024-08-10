"use client"
import Breadcrumbs from "../components/Breadcrumbs";
import LightBtn from "../components/light-btn";
import SelectDropDown from "../components/SelectDropDown";
import Input from "../components/Input";
import { useState } from "react";
export default function Shipping() {
  const breadcrumbData = [
    { label: "Dashboard", href: "/" },
    { label: "Shipping", href: "/shipping" },
  ];
  const addresses = [
    "Dhaka, Bangladesh",
    "Chittagong, Bangladesh",
    "Rajshahi, Bangladesh",
    "Cumilla, Bangladesh",
    "Rangpur, Bangladesh",
    "Dinajpur, Bangladesh",
    // Add more addresses as needed
  ];
  const [insideCharge,setInsideCharge]=useState("50");
  const [outsideCharge,setOutsideCharge]=useState("110");
  const [selectedAddress, setSelectedAddress] = useState("");
  return (
    <div className="main-container flex flex-col w-full p-6 gap-5 h-screen">
      <div className="title-part flex flex-col gap-3">
        <Breadcrumbs breadcrumbs={breadcrumbData} />
        <LightBtn colour={"bg-teal-300"} title={"Shipping"} />
        <div><span className="pl-2 text-gray-600">Select the Disrtict (BD)</span></div>
        <SelectDropDown options={addresses} selectedOption={selectedAddress} setSelectedOption={setSelectedAddress} placeHolder={"Select Address"}/>
        <div><span className="pl-2 text-gray-600">Inside {selectedAddress} (BDT)</span></div>
        <Input value={insideCharge} setValue={setInsideCharge}/>
        <div><span className="pl-2 text-gray-600">Outside {selectedAddress} (BDT)</span></div>
        <Input value={outsideCharge} setValue={setOutsideCharge}/>
        <LightBtn colour={"bg-blue-700"} title={"Save Rate"} extCss="text-white"/>
      </div>
    </div>
  );
}
