import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [gender, setGender] = useState('')
  const [regno, setRegno] = useState('')
  const [branch, setBranch] = useState('')
  const [number, setNumber] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')

  function showPlaceholder(e) {
    e.target.placeholder = e.target.name
  }

  function hidePlaceholder(e) {
    e.target.placeholder = ""
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "First Name:", fname,
      "Last Name:", lname,
      "Gender:", gender,
      "Registration Number:", regno,
      "Branch:", branch,
      "Number:", number,
      "LinkedIn:", linkedin,
      "Github:", github,
    )
  }
  return (
    <div>
      <Head>
        <title>SRMKZILLA Recruitment Form</title>
        <meta name="description" content="Recruitment form of Kzilla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 gradient">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-6 text-center sm:text-4xl text-3xl font-bold text-white">First step to become a part of SRMKZILLA <span className='line-through decoration-8 decoration-red-500'>team</span> <span className='text-red-500'>family</span></h2>
          </div>

          <div className="mt-8 w-full">
            <div className="py-8 px-6 shadow rounded-lg sm:px-10">
              <form>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                  <div className="form-control mb-8">
                    <input type="text" placeholder='' name='Samarth' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setFname(e.target.value)} value={fname} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>F</span><span style={{ transitionDelay: "50ms" }}>i</span><span style={{ transitionDelay: "100ms" }}>r</span><span style={{ transitionDelay: "150ms" }}>s</span><span style={{ transitionDelay: "200ms" }}>t</span><span style={{ transitionDelay: "250ms" }}>&nbsp;</span><span style={{ transitionDelay: "300ms" }}>N</span><span style={{ transitionDelay: "350ms" }}>a</span><span style={{ transitionDelay: "400ms" }}>m</span><span style={{ transitionDelay: "450ms" }}>e</span>
                    </label>
                  </div>
                  <div className="form-control mb-8">
                    <input type="text" placeholder='' name='Jain' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setLname(e.target.value)} value={lname} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>L</span><span style={{ transitionDelay: "50ms" }}>a</span><span style={{ transitionDelay: "100ms" }}>s</span><span style={{ transitionDelay: "150ms" }}>t</span><span style={{ transitionDelay: "200ms" }}>&nbsp;</span><span style={{ transitionDelay: "250ms" }}>N</span><span style={{ transitionDelay: "300ms" }}>a</span><span style={{ transitionDelay: "350ms" }}>m</span><span style={{ transitionDelay: "400ms" }}>e</span>
                    </label>
                  </div>
                  <div className="form-control mb-8" onChange={(e) => setGender(e.target.value)} value={gender}>
                    <select type="text">
                      <option defaultValue className='hidden'></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>G</span><span style={{ transitionDelay: "50ms" }}>e</span><span style={{ transitionDelay: "100ms" }}>n</span><span style={{ transitionDelay: "150ms" }}>d</span><span style={{ transitionDelay: "200ms" }}>e</span><span style={{ transitionDelay: "250ms" }}>r</span>
                    </label>
                  </div>
                  <div className="form-control mb-8">
                    <input type="text" placeholder='' name='RA2111003010943' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setRegno(e.target.value)} value={regno} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>R</span><span style={{ transitionDelay: "25ms" }}>e</span><span style={{ transitionDelay: "50ms" }}>g</span><span style={{ transitionDelay: "75ms" }}>i</span><span style={{ transitionDelay: "100ms" }}>s</span><span style={{ transitionDelay: "125ms" }}>t</span><span style={{ transitionDelay: "150ms" }}>r</span><span style={{ transitionDelay: "200ms" }}>a</span><span style={{ transitionDelay: "225ms" }}>t</span><span style={{ transitionDelay: "250ms" }}>i</span><span style={{ transitionDelay: "275ms" }}>o</span><span style={{ transitionDelay: "300ms" }}>n</span><span style={{ transitionDelay: "325ms" }}>&nbsp;</span><span style={{ transitionDelay: "350ms" }}>N</span><span style={{ transitionDelay: "375ms" }}>u</span><span style={{ transitionDelay: "400ms" }}>m</span><span style={{ transitionDelay: "425ms" }}>b</span><span style={{ transitionDelay: "450ms" }}>e</span><span style={{ transitionDelay: "475ms" }}>r</span>
                    </label>
                  </div>
                  <div className="form-control mb-8">
                    <input type="text" placeholder='' name='Enter your branch' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setBranch(e.target.value)} value={branch} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>B</span><span style={{ transitionDelay: "50ms" }}>r</span><span style={{ transitionDelay: "100ms" }}>a</span><span style={{ transitionDelay: "150ms" }}>n</span><span style={{ transitionDelay: "200ms" }}>c</span><span style={{ transitionDelay: "250ms" }}>h</span>
                    </label>
                  </div>
                  <div className="form-control mb-8">
                    <input type="number" placeholder='' name='8127471064' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setNumber(e.target.value)} value={number} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>C</span><span style={{ transitionDelay: "50ms" }}>o</span><span style={{ transitionDelay: "100ms" }}>n</span><span style={{ transitionDelay: "150ms" }}>t</span><span style={{ transitionDelay: "200ms" }}>a</span><span style={{ transitionDelay: "250ms" }}>c</span><span style={{ transitionDelay: "300ms" }}>t</span><span style={{ transitionDelay: "350ms" }}>&nbsp;</span><span style={{ transitionDelay: "400ms" }}>N</span><span style={{ transitionDelay: "450ms" }}>o</span><span style={{ transitionDelay: "500ms" }}>.</span>
                    </label>
                  </div>
                  <div className="form-control mb-8">
                    <input type="text" placeholder='' name='https://www.linkedin.com/in/samarth-jain/' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setLinkedin(e.target.value)} value={linkedin} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>L</span><span style={{ transitionDelay: "30ms" }}>i</span><span style={{ transitionDelay: "60ms" }}>n</span><span style={{ transitionDelay: "90ms" }}>k</span><span style={{ transitionDelay: "120ms" }}>e</span><span style={{ transitionDelay: "150ms" }}>d</span><span style={{ transitionDelay: "180ms" }}>I</span><span style={{ transitionDelay: "210ms" }}>n</span><span style={{ transitionDelay: "240ms" }}>&nbsp;</span><span style={{ transitionDelay: "270ms" }}>P</span><span style={{ transitionDelay: "300ms" }}>r</span><span style={{ transitionDelay: "330ms" }}>o</span><span style={{ transitionDelay: "360ms" }}>f</span><span style={{ transitionDelay: "390ms" }}>i</span><span style={{ transitionDelay: "420ms" }}>l</span><span style={{ transitionDelay: "450ms" }}>e</span>
                    </label>
                  </div>
                  <div className="form-control mb-8">
                    <input type="text" placeholder='' name='https://github.com/SamOP549' onFocus={showPlaceholder} onBlur={hidePlaceholder} onChange={(e) => setGithub(e.target.value)} value={github} />
                    <label>
                      <span style={{ transitionDelay: "0ms" }}>G</span><span style={{ transitionDelay: "40ms" }}>i</span><span style={{ transitionDelay: "80ms" }}>t</span><span style={{ transitionDelay: "120ms" }}>H</span><span style={{ transitionDelay: "160ms" }}>u</span><span style={{ transitionDelay: "200ms" }}>b</span><span style={{ transitionDelay: "240ms" }}>&nbsp;</span><span style={{ transitionDelay: "280ms" }}>L</span><span style={{ transitionDelay: "320ms" }}>i</span><span style={{ transitionDelay: "360ms" }}>n</span><span style={{ transitionDelay: "400ms" }}>k</span>
                    </label>
                  </div>
                </div>
                <div className='flex md:justify-start justify-center'>
                  <Link href={{ pathname: '/result', query: { fname: fname, lname: lname, gender: gender, regno: regno, branch: branch, number: number, linkedin: linkedin, github: github } }}><a><button type="submit" onSubmit={handleSubmit} className="inline-block px-10 py-3 bg-red-500 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button></a></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
