import React from 'react'

const ErrorMessage = ({closeBox}) => {
  return (
    <div ref={closeBox} >
    <p style={{color: "red"}} >Please Enter the Valid Mobile number</p>
</div>
  )
}

export default ErrorMessage