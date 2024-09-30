import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                alert('User registered successfully'); // Show alert for success
                // Handle success, e.g. redirect to another page
            } else {
                throw new Error('Failed to register user');
            }
        })
        .catch(error => {
            console.error(error);
            setErrorMessage('Failed to register user');
        });
    }

    return (
        <>
            <div className='bg-zinc-50 px-3 pt-4 pb-20'>
                <form className='flex flex-col bg-white justify-between items-center py-10 px-3 sm:px-6 gap-y-6 w-full sm:w-3/5 mx-auto shadow-xl rounded-lg border-2 border-zinc-300'
                    onSubmit={handleFormSubmit}>
                        <img src="./logo.png" className='h-20 w-20' alt='logo'/>
                    <h3 className='text-3xl font-bold text-[#99C830] '>
                        SIGN-UP
                    </h3>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <label htmlFor='name' className='flex flex-col w-full gap-y-2 cursor-pointer'>
                        <span className='text-zinc-600 font-semibold'>Full Name : </span>
                        <input type='text' placeholder='John Doe' id='name' name='name'
                            className='px-3 py-3 bg-zinc-100 rounded-lg focus:bg-zinc-200 outline-none placeholder:text-zinc-500'
                        />
                    </label>

                    <label htmlFor='email' className='flex flex-col w-full gap-y-2 cursor-pointer'>
                        <span className='text-zinc-600 font-semibold'>Email : </span>
                        <input type='email' placeholder='youremail@example.com' id='email' name='email'
                            className='px-3 py-3 bg-zinc-100 rounded-lg focus:bg-zinc-200 outline-none placeholder:text-zinc-500'
                        />
                    </label>

                    <label htmlFor='phone' className='flex flex-col w-full gap-y-2 cursor-pointer'>
                        <span className='text-zinc-600 font-semibold'>Contact No. : </span>
                        <input type='tel' placeholder='0000000000' id='phone' name='phone'
                            className='px-3 py-3 bg-zinc-100 rounded-lg focus:bg-zinc-200 outline-none placeholder:text-zinc-500'
                            minLength="10"
                            maxLength="10"
                        />
                    </label>

                    <label htmlFor='post' className='flex flex-col w-full gap-y-2 cursor-pointer'>
                        <span className='text-zinc-600 font-semibold'>Designation : </span>
                        <select name='post' id='post'
                            className='px-3 py-3 bg-zinc-100 rounded-lg focus:bg-zinc-200 outline-none placeholder:text-zinc-500'
                        >
                            <option value='srhod'>Chief Operating Officer</option>
                            <option value='hod'>Senior HOD</option>
                            <option value='coo'>HOD</option>
                            <option value='intern'>Intern</option>
                        </select>
                    </label>

                    <label htmlFor='password' className='flex flex-col w-full gap-y-2 cursor-pointer relative' >
                        <span className='text-zinc-600 font-semibold'>Password : </span>
                        <input type={showPassword ? 'text' : 'password'} placeholder='********' id='password' name='password'
                            className='px-3 py-3 bg-zinc-100 rounded-lg focus:bg-zinc-200 outline-none placeholder:text-zinc-500'
                        />
                        <span className='absolute grid place-items-center top-12 right-6 text-2xl text-zinc-500 cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IconEye /> : <IconEyeInvisible />
                            }
                        </span>
                    </label>

                    <button type='submit'
                        className='mx-auto font-semibold text-2xl bg-[#99C830] 
                        hover:bg-emerald-700 text-white py-2 text-center px-20 rounded-md'
                    >
                        Signup
                    </button>

                    <p className='text-zinc-400 w-full text-center'>
                        Already registered ? <Link to={'/Login'} className='text-blue-600'>Login</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Signup;

function IconEyeInvisible(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M508 624a112 112 0 00112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 00-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 000 11.31L155.25 889a8 8 0 0011.31 0l712.16-712.12a8 8 0 000-11.32zM332 512a176 176 0 01258.88-155.28l-48.62 48.62a112.08 112.08 0 00-140.92 140.92l-48.62 48.62A175.09 175.09 0 01332 512z" />
            <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 01445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5z" />
        </svg>
    );
}

function IconEye(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
        </svg>
    );
}