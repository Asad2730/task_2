"use client";
import { useState } from "react";
import { SideComponent } from "../components/sideComponent";

export default function SignIn() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  const onChangeHandler = (key: string, e: any) =>
    setForm({ ...form, [key]: e.target.value });

  const inputs = [
    {
      label: "First Name",
      placeHolder: "Enter Your First Name",
      key: "firstName",
      value: form.firstName,
    },
    {
      label: "Last Name",
      placeHolder: "Enter Your Last Name",
      key: "lastName",
      value: form.lastName,
    },
  ];
  return (
    <div className="flex flex-row w-screen h-screen bg-black">
      <SideComponent />
      <div className="flex flex-col h-full w-[40%] bg-slate-950 justify-center p-6">
        <span className="text-white text-lg">Sign in</span>
        <form className="p-2 space-y-2">
          <div className="grid grid-cols-1 gap-1">
            {inputs.map((i, indx) => (
              <div key={indx} className=" flex flex-col">
                <span className="text-white">{i.label}</span>
                <input
                  placeholder={i.placeHolder}
                  value={i.value}
                  onChange={(e) => onChangeHandler(i.key, e)}
                  className="border border-y-red-100  bg-black h-10 text-left p-1"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-1">
              <input type="checkbox" className="text-sm text-blue-800" />
              <span className="text-white">Remeber Password</span>
            </div>
            <span className="text-sm text-blue-800 mt-1">Forgot Password</span>
          </div>

          <button className="text-black bg-white h-12 w-20 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
