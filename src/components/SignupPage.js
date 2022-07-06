import { Fragment, useRef } from 'react'; // importing the useRef hook from react library

import classes from './SignupPage.module.css'; 


const LoginPage = (props) => {

    // using the useRef hook to get the values entered by the user
    const fnameRef = useRef(); 
    const lnameRef = useRef();
    const emailRef = useRef();
    const collegeRef = useRef();
    const linkedInRef = useRef();

    const formSubmitHandler= (event) => {
        event.preventDefault(); 

        const dataObject = {
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            email: emailRef.current.value,
            college: collegeRef.current.value,
            linkedIn: linkedInRef.current.value
        }

        console.log(dataObject);
    };

    return(
        <Fragment>
            <h1 className={classes.header}>Poseidon(Beta)</h1>

        <div className={classes.body}>
        <div className={classes.container}>
            <div className={classes.title}>Registration</div>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.userDetails}>
                    <div className={classes.inputBox}>
                        <label htmlFor='fname' className={classes.details}>First Name</label>
                        <input type="text" id='fname' placeholder='Enter your first name' ref= {fnameRef} />
                    </div>

                    <div className={classes.inputBox}>
                        <label htmlFor='lname' className={classes.details}>Last Name</label>
                        <input type="text" id='lname' placeholder='Enter your last name' ref= {lnameRef} />
                    </div>

                    <div className={classes.inputBox}>
                        <label htmlFor='email' className={classes.details}>Email</label>
                        <input type="email" id='email' placeholder='Enter your email address' ref= {emailRef} />
                    </div>

                    <div className={classes.inputBox}>
                        <label htmlFor='college' className={classes.details}>College of Undergraduation</label>
                        <select ref={collegeRef} id='college' placeholder='--select your college--'>
                            <option>--select your college--</option>
                            <option>Maharaja Agrasen Institute of Technology</option>
                            <option>IIT Delhi</option>
                            <option>Delhi Technical University</option>
                            <option>Netaji Shubhash University of Technology</option>
                        </select>
                    </div>

                    {/* <div className={classes.inputBox}>
                        <label htmlFor='yORn' className={classes.details}>Do you have a LinkedIn Account</label>
                        
                        <input type="radio" id='yORn' name='linkedIn' />
                        <label>Yes</label>
                        <input type="radio" id='yORn' name='linkedIn' />
                        <label>No</label>
                    </div> */}

                    <div className={classes.inputBox}>
                        <label htmlFor='linkedIn' className={classes.details}>LinkedIn URL</label>
                        <input type="text" id='linkedIn' placeholder='LinkedIn URL' ref= {linkedInRef} />
                    </div>
                </div>
                <button className={classes.button}>Register</button>
            </form>
        </div>
        </div>
        </Fragment>
    );
};

export default LoginPage; 