'use client';
import { useState } from "react"


export default function RecruiterForm(){

    const [fname, setFname] = useState(null)
    const [lname, setLname] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [reg, setReg] = useState(null)
    const [bname, setBname] = useState(null)
    const [position, setPostion] = useState(null)
    const [category, setCategory] = useState(null)
    const [psw, setPsw] = useState(null)

    const [canSubmit, setCanSubmit] = useState(false)
    const [corrPass, setCorrPass] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const [errMail, setErrMail] = useState(false)

    function pass(e){
        console.log(e.target.value)
        setPsw(e.target.value)
    }
    return (
        <div className="pt-20 pb-5">
            <div className="w-[30rem] md:w-[50rem] py-6 bg-orange-200 m-auto">
                <h2 className="font-bold my-6 text-orange-700 text-lg md:text-xl text-center uppercase">Register as a company, recruiter or job seeker</h2>
                <div className="md:w-[30rem] w-[20rem] m-auto">
                    <label className="text-sm" htmlFor="fname">First Name</label>
                    <input onChange={e=>setFname(e.target.value)} type="text" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 w-[20rem] md:w-[30rem]" placeholder="Enter your first name" />
                    <label className="text-sm capitalize" htmlFor="lname">last name</label>
                    <input onChange={e=>setLname(e.target.value)} type="text" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]" placeholder="Enter your last name" />

                    {/* Phone */}
                    <label className="text-sm capitalize" htmlFor="phone">Phone</label>
                    <input onChange={e=>setPhone(e.target.value)} type="text" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]" placeholder="Enter your phone number" />
                    
                    {/* Email */}
                    <label className="text-sm capitalize" htmlFor="email">Email</label>
                    <input onKeyUp={e=>{{
                        let val = e.target.value
                        if(val.includes('@') && val.includes('.com')){
                            setEmail(val)
                            setErrMail(false)
                        } else{
                            setErrMail(true)
                        }
                        }}} type="text" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]" placeholder="Enter your email address" />
                        {errMail && <small className="text-red-500 block">* Your email must contain '@' and '.com'</small>}
                    
                    {/* Reg as */}
                    <label className="text-sm capitalize" htmlFor="reg-as">Register as?</label>
                    <select onChange={e=>{
                        if(e.target.value === 'recruiter'){
                          setReg('recruiter')  
                        } else if(e.target.value === 'seeker'){
                            setReg('seeker')
                        }   
                    }} type="text" className="block px-4 py-1.5 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]">
                        <option value="">-- Select --</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="seeker">Job Seeker</option>
                    </select>

                    {reg === 'recruiter' ? <div>
                        {/* B name */}
                        <label className="text-sm capitalize" htmlFor="b-name">Business name</label>
                        <input onChange={e=>{
                            setBname(e.target.value)
                        }} type="text" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]" placeholder="Enter your business or company name" />
                        
                        {/* Position */}
                        <label className="text-sm capitalize" htmlFor="position">Position</label>
                        <select onChange={e=>{
                        if(e.target.value === 'ceo'){
                          setPostion('ceo')  
                        } else if(e.target.value === 'cto'){
                            setPostion('cto')
                        }   
                        }} type="text" className="block px-4 py-1.5 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]">
                        <option value="">-- Select --</option>
                        <option value="ceo">CEO</option>
                        <option value="cto">CTO</option>
                        </select>
                    </div>:

                    <div>
                        {/* Category */}
                        <label className="text-sm capitalize" htmlFor="category">Category</label>
                        <select onChange={e=>{
                        if(e.target.value === 'software engineer'){
                          setCategory('software engineer')  
                        } else if(e.target.value === 'graphic designer'){
                            setCategory('graphic designer')
                        } else if(e.target.value === 'data analyst'){
                            setCategory('data analyst')
                        }
                        }} type="text" className="block px-4 py-1.5 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]">
                        <option value="">-- Select --</option>
                        <option value="software engineer">Softaware Engineer</option>
                        <option value="graphic designer">Graphic Designer</option>
                        <option value="data analyst">Data Analyst</option>
                        </select>
                    </div>}

                    {/* Psw */}
                    <label className="text-sm capitalize" htmlFor="psw">Password</label>
                    <input onChange={e=>pass(e)} type="password" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]" placeholder="Enter a password" />

                    {/* Rpt Psw */}
                    <label className="text-sm capitalize" htmlFor="psw">Repeat Password</label>
                    <input onKeyUp={e=>{
                        if(e.target.value === psw){
                            setCorrPass(true)
                            setErrMsg(false)
                        }else{
                            setErrMsg(true)
                        }
                    }} type="password" className="block px-4 py-1 border-orange-700 border-2 outline-none mb-2 text-orange-700 md:w-[30rem] w-[20rem]" placeholder="Repeat password" />
                    {errMsg && <small className="text-red-500">* Your passwords does not match</small>}
                    
                    <div className="flex mt-6 justify-center">
                        {!canSubmit ? <button onClick={()=>setCanSubmit(true)} className="bg-orange-700 m-auto px-4 py-2 font-bold text-white rounded-md">Submit</button> :
                        <button className="bg-gray-700 cursor-not-allowed m-auto px-4 font-bold py-2 text-white rounded-md">Submiting...</button>}


                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}