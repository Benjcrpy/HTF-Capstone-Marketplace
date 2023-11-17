import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormEvent } from "react";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter();

  const logIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/home");
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));
 
  return (
    <React.Fragment>
      <section>
        <form onSubmit={(e) => logIn(e)} >
          <div className="bg-black w-auto h-96 mx-5 mt-20 rounded-lg ">
            <div className="h-28 flex justify-center items-center shadow">
              <p className="uppercase text-4xl text-center">Validate checkbox input</p>
            </div>

            <div>
              <div className="grid justify-center mt-16">
                <div className="flex space-x-3">
                  <div className="flex">
                    <div className="grid justify-center">
                      <input 
                      type="checkbox"
                      value='yes'
                      className="w-6 h-6"
                      {...register("agreement", { required: 'Agreement is required' })}
                      />
                    </div>
                    <div>
                      <p className="text-2xl">I Agree with the terms and condition</p>
                    </div>
                  </div>
                    <div>
                    {errors.agreement && <span className="text-sm text-red-800">This field is required</span>}
                    </div>
                </div>

              </div>
                <div className="flex justify-center items-center mt-16">
              <input
                type="submit"
                value="submit"
                className="w-2/5 h-10 font-bold text-white bg-yellow-500 rounded-lg cursor-pointer"
              />
              </div> 
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
    
  );
          
}