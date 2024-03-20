import React from 'react'
import Navigation from './Navigation'

function AboutUs() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <div className="mt-5 mx-5 profile-boxes">
            <div className="profile-box mt-2">
                <img src="profile_image/profile-01.jpg" alt="" className="profile-image"/>
                <p style={{textAlign:"center",marginBottom:"80px"}}><b style={{fontSize:"30px"}}>Lahiru</b><br/>Code Olima MERN Stack Developer</p>
                <p>View Profile</p>
            </div>
            <div className="profile-box mt-2">
                <img src="profile_image/profile-02.jpg" alt="" className="profile-image"/>
                <p style={{textAlign:"center",marginBottom:"80px"}}><b style={{fontSize:"30px"}}>Lakmina</b><br/>Code Olima Frontend Developer</p>
                <p>View Profile</p>
            </div>
            <div className="profile-box mt-2">
                <img src="profile_image/profile-03.jpg" alt="" className="profile-image"/>
                <p style={{textAlign:"center",marginBottom:"80px"}}><b style={{fontSize:"30px"}}>Alisa</b><br/>Code Olima UI/UX Designer</p>
                <p>View Profile</p>
            </div>
        </div>
        <div className="p-3 about-us-bottom-container">
            <div className='d-flex flex-column align-items-center text-light'>
                <div style={{position: 'relative',width:"200px",}}>
                    <img src='Icons/social.png' alt='' style={{backgroundColor:"white",width:"50px",height:"50px", borderRadius:"100%",position: 'absolute',top:"-40px",left:"40%",}}/>
                    <div className='pt-2 mt-3 mb-3 d-flex flex-row algn-items-center justify-content-center,' style={{borderTop: '2px solid white'}}>
                        <img src="/Icons/facebook.png" alt="" style={{width:"30px",height:"30px",marginRight:"10px"}}/>
                        <h6>Facebook</h6>
                    </div>

                    <div className='mb-3 d-flex flex-row align-items-center'>
                        <img src="Icons/google.png" alt="" style={{width:"30px",height:"30px",marginRight:"10px"}}/>
                        <h6>Google</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs