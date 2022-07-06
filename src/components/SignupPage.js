import { useRef } from 'react'; // importing the useRef hook from react library

import classes from './SignupPage.module.css'; 


const LoginPage = (props) => {

    const useRef(); 

    const formSubmitHandler= () => {

    };

    return(
        <div>
            <form onSubmit={formSubmitHandler}>
                
                <label htmlFor='fname'>First Name</label>
                <input type="text" placeholder='your first name' id="fname" />

                <label htmlFor='lname'>Last Name</label>
                <input type="text" placeholder='your last name' id="lname" />

                <label htmlFor='fname'>Email Address</label>
                <input type="email" placeholder='email' id="email" />

                <label htmlFor='fname'>Undergraduate From</label>
                <select>
                    <option>--select your college of undergraduation--</option>
                    <option>fsd</option>
                    <option>fsd</option>
                </select>
                <br />

                <p>Do you have a LinkedIn account?</p>
                    <div>
                        <input type="radio" id="yes" name='linkedIn'/>
                        <label htmlFor="yes">Yes</label>
                    </div>
                    
                    <div>
                        <input type="radio" id="no" name='linkedIn' />
                        <label htmlFor="no">No</label>
                    </div>
                
                <label>Your LinkedIn profile URL</label>
                <input type="text" id='url' placeholder='LinkedIn URL' />
            </form>
        </div>
    );
};

export default LoginPage; 