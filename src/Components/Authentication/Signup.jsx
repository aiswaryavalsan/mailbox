import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>SIGNUP</h1>
        <form>
            <input type="text" placeholder='Full Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm Password'/>
            <button>SIGN UP</button>
            {/* <link>Already have an account login</link> */}

        </form>
    </div>
  )
}

export default Signup