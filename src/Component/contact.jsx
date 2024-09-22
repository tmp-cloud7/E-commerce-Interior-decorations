import React, { useState } from "react";
import './contact.css';

const Contact = () => {
    const [user, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }
    const senddata = async (e) => 
        {
            const { Name, Email, Subject, Message} = user
            e.preventDefault();
            const options = {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({
                 Name, Email, Subject, Message   
                })
            }
            const res = await fetch('https://interiordecor-contact-default-rtdb.firebaseio.com/Message.json', options )
            console.log(res)
            if(res) {
                alert("Your Message Sent")
            }
            else {
                alert("An error occured")
            }
        }
    return(
        <>
        <div className="contact_container">
            <div className="contant">
                <div className="form">
                    <form method="POST">
                        <input type="text" name="Name" value={user.Name} placeholder="Enter Your Fullname" required autoComplete="off" onChange={data}></input>
                        <input type="email" name="Email" value={user.Email} placeholder="Enter Your E-mail" required autoComplete="off" onChange={data}></input>
                        <input type="text" name="Subject" value={user.Subject} placeholder="Enter Your Subject" required autoComplete="off"onChange={data} ></input>
                        <textarea name="Message" value={user.Message}placeholder="Your Message" required autoComplete="off"onChange={data} ></textarea>
                        <button type="submit" onClick={ senddata}>Send</button>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;