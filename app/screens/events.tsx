"use client";
import { useState } from "react";
import { SideComponent } from "../components/sideComponent";

export default function Events() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    compnany_name: "",
    company_size: "",
    description:'',
  });

  const onChangeHandler = (key: string, e: any) =>
    setForm({ ...form, [key]: e.target.value });

  const inputs = [
    {
      label: "First Name",
      placeHolder: "Enter Your First Name",
      key: "firstName",
      value: form.firstName,
      type: "text",
    },
    {
      label: "Last Name",
      placeHolder: "Enter Your Last Name",
      key: "lastName",
      value: form.lastName,
      type: "text",
    },
    {
      label: "Company Email",
      placeHolder: "Enter company email",
      key: "email",
      value: form.email,
      type: "email",
    },
    {
      label: "Title",
      placeHolder: "Enter title",
      key: "title",
      value: form.title,
      type: "text",
    },
  ];

  return (
    <div className="flex flex-row w-screen h-screen bg-black">
      <SideComponent />
      <div className="flex flex-col h-full w-[40%] bg-slate-950 justify-center p-6">
        <span className="text-white text-lg">Join the event</span>
        <form className="p-2 space-y-2">
          <div className="grid grid-cols-2 gap-1">
            {inputs.map((i, indx) => (
              <div key={indx} className=" flex flex-col">
                <span className="text-white">{i.label}</span>
                <input
                  placeholder={i.placeHolder}
                  value={i.value}
                  onChange={(e) => onChangeHandler(i.key, e)}
                  className="border border-y-red-100  bg-black h-10 text-left p-1"
                  type={i.type}
                />
              </div>
            ))}

            
          </div>

          <div className="grid grid-cols-2 gap-1">
              <div className=" flex flex-col">
                <span className="text-white">Company Name</span>
                <input
                  placeholder={"company name"}
                  value={form.compnany_name}
                  onChange={(e) => onChangeHandler("compnany_name", e)}
                  className="border border-y-red-100  bg-black h-10 text-left p-1"
                />
              </div>

              
              <div className=" flex flex-col">
                <span className="text-white">Company Size</span>
                <select  className="border border-y-red-100  bg-black h-10 text-left p-1"></select>
              </div>
            </div>
         

         <div className="flex flex-col">
            
         </div>


          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-1">
              <input type="checkbox" className="text-sm text-blue-800" />
              <span className="text-white">Remeber Password</span>
            </div>
            <span className="text-sm text-blue-800 mt-1">Forgot Password</span>
          </div>

          <button className="text-black bg-white h-12 w-20 ">Submit</button>
        </form>
      </div>
    </div>
  );
}
