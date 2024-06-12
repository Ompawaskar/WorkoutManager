import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useLogin } from '../hooks/useLogin';


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login,error,isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hi");
        login(email,password)
    }

    return (
        <form className="flex border-2 shadow-sm border-gray-200 mt-24 flex-col gap-4 p-8 mx-96" onSubmit={handleSubmit}>
        <div>
          <h1 className='mb-4 text-2xl font-sans font-extrabold'>Log in</h1>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" value={email} placeholder="name@flowbite.com" required 
          onChange={(e) => {
            setEmail(e.target.value)
          }} className='w-full'/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" value={password} required
            onChange={(e) => {
                setPassword(e.target.value)
            }} className='w-full'/>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" cla>Remember me</Label>
        </div>
        <Button type="submit" className='bg-green-500' disabled = {isLoading}>Submit</Button>
        {error && <div className='bg-red-200 text-red-400'>
            {error}
            </div>}
      </form>
  );
}

export default Login
