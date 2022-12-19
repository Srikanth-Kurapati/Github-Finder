import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 my-10 bg-gray-700 text-primary-content footer-content '> 
       <div style={{paddingLeft: "40%"}}>
            <p> {footerYear} &copy; <br /> All rights are reserved
            </p>
       </div>
    </footer>
  )
}

export default Footer