import React from 'react'
import { useRouter } from 'next/router'

const Result = () => {
    const router = useRouter();
    const query = router.query;
    console.log(
        "First Name:", query.fname,
        "Last Name:", query.lname,
        "Email:", query.email,
        "Gender:", query.gender,
        "Registration Number:", query.regno,
        "Branch:", query.branch,
        "Number:", query.number,
        "LinkedIn:", query.linkedin,
        "Github:", query.github,
      )
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br to-gray-800 from-blue-800 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">The deatils you entered</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <h5>First Name: <span className='text-amber-500'>{query.fname}</span></h5>
                                    <h5>Last Name: <span className='text-amber-500'>{query.lname}</span></h5>
                                    <h5>Email: <span className='text-amber-500'>{query.email}</span></h5>
                                    <h5>Gender: <span className='text-amber-500'>{query.gender}</span></h5>
                                    <h5>Registration Number: <span className='text-amber-500'>{query.regno}</span></h5>
                                    <h5>Branch: <span className='text-amber-500'>{query.branch}</span></h5>
                                    <h5>Contact No.: <span className='text-amber-500'>{query.number}</span></h5>
                                    <h5>LinkedIn Profile: <span className='text-blue-500 hover:text-blue-800'><a href={query.linkedin} target="_blank" rel="noreferrer noopener">{query.linkedin}</a></span></h5>
                                    <h5>GitHub Link: <span className='text-blue-500 hover:text-blue-800'><a href={query.github} target="_blank" rel="noreferrer noopener">{query.github}</a></span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result