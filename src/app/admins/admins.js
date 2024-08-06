"use client"
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Input from "../components/Input";
import LightBtn from "../components/light-btn";
import Table from "./Table";

export default function Admin(){
    const breadcrumbData = [
        { label: "Dashboard", href: "/" },
        { label: "Amdins", href: "/admins" },
      ];
      const admins = [
        { email: 'mrsaymon@gmail.com', createdAt: '2024-03-12 18:46:07' },
        { email: 'john.doe@gmail.com', createdAt: '2024-03-13 14:32:10' },
        { email: 'jane.doe@gmail.com', createdAt: '2024-03-14 09:20:05' },
        // Add more data as needed
      ];
    const [newAdmin,setNewAdmin]=useState("")
    return(
        <div className="flex flex-col pl-6 pt-6 gap-6 pr-4 rounded-md">
            <Breadcrumbs breadcrumbs={breadcrumbData}/>
            <LightBtn colour={"bg-teal-300"} title={"Admins"}/>
            <div>
            <span className="pl-2 text-gray-600">Add New Admin</span>
            <Input value={newAdmin} setValue={setNewAdmin} placeHolder={"Google Email"}/>
            </div>
            <div>
            <span className="pl-2 text-gray-600">Existing Admins</span>
            <Table data={admins}/>
            </div>
        </div>
    )
}