import React, {createRef, useState} from 'react';


const Otp = () => {
    const ref0 = createRef();
    const ref1 = createRef();
    const ref2 = createRef();
    const ref3 = createRef();
    const ref4 = createRef();
    const ref5 = createRef();
    const [otp, setOtp] = useState("")
console.log("OTP", otp)
function isNumber(value) {
    if (typeof value === "string") {
        return !isNaN(value);
    }
}
const handlePaste =()=>{
    navigator.clipboard.readText()
  .then(text => {
    if(isNumber(text) && text.length == 6)
    {
        setOtp(text);
      
    }

  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
}
  return (
        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', borderRadius: 5, justifyContent: 'center'}}>
            <input
                
                ref={ref0}
                maxLength="1"
                value={otp.slice(0,1)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyUp={(e) => {
                    if(e.key == "ArrowRight")
                    ref1.current.focus();

                    else {
                   
                        e.preventDefault();
                      
                    }
                }}
                onChange={(e) => {
                    if(e.target.value !== ' ' && e.target.value.length===1) {
                        if(isNaN(e.target.value))
                        console.log("Enter Numeric Value");
                        else
                        {
                            setOtp(otp + e.target.value);
                        ref1.current.focus();
                        }
                        
                    } else {
                        if (e.target.value !== ' ') {
                         
                            setOtp(otp.slice(1))
                        } 
                     
                    }
                }}
                onPaste={handlePaste}
            />
            <input
                
                ref={ref1}
                maxLength="1"
                value={otp.slice(1,2)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyUp={(e) => {
                    if (e.key == 'Backspace' && e.target.value.length!==1)
                    {
                        ref0.current.focus()
                    }
                    else if(e.key == "ArrowLeft")
                    {
                        ref0.current.focus()
                    }
                    else if(e.key=="ArrowRight")
                    {
                        ref2.current.focus();
                    }
                    else
                    e.preventDefault()
                  
                }}
                onChange={(e) => {
                    if(e.target.value !== ' ' && e.target.value.length===1) {
                        if(isNaN(e.target.value))
                        console.log("Enter Numeric Value");
                        else
                        {
                            setOtp(otp + e.target.value);
                        ref2.current.focus();
                        }
                    } else {
                        if (e.target.value !== ' ') {
                            
                            setOtp(otp.slice(0, 1));
                            ref0.current.focus();
                        } 
                    
                    }
                }}
                onPaste={handlePaste}
            />
            <input
                
                ref={ref2}
                maxLength="1"
                value={otp.slice(2,3)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyUp={(e) => {
                 
                    if (e.key == 'Backspace' && e.target.value.length!==1)
                    {
                        ref1.current.focus()
                    }
                    else if(e.key == "ArrowLeft")
                    {
                        ref1.current.focus()
                    }
                    else if(e.key=="ArrowRight")
                    {
                        ref3.current.focus();
                    }
                    else
                    e.preventDefault()
                   
                }}
                onChange={(e) => {
                    if(e.target.value !== ' ' && e.target.value.length===1) {
                        if(isNaN(e.target.value))
                        console.log("Enter Numeric Value");
                        else
                        {
                            setOtp(otp + e.target.value);
                        ref3.current.focus();
                        }
                    } else {
                        if (e.target.value !== ' ') {
                         
                          
                            setOtp(otp.slice(0, 2));
                            ref1.current.focus();
                        } 
                   
                    }
                }}
                onPaste={handlePaste}

            />
            <input
                
                ref={ref3}
                maxLength="1"
                value={otp.slice(3,4)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyUp={(e) => {
                  
                    if (e.key == 'Backspace' && e.target.value.length!==1)
                    {console.log("169")
                        ref2.current.focus()
                    }  else if(e.key == "ArrowLeft")
                    {
                        ref2.current.focus()
                    }
                    else if(e.key=="ArrowRight")
                    {
                        ref4.current.focus();
                    }
                    else
                    e.preventDefault()
                  
                }}
                onChange={(e) => {
                    if(e.target.value !== ' '  && e.target.value.length===1) {
                        if(isNaN(e.target.value))
                        console.log("Enter Numeric Value");
                        else
                        {
                            setOtp(otp + e.target.value);
                        ref4.current.focus();
                        }
                    } else {
                        if (e.target.value !== ' ') {
                           
                            setOtp(otp.slice(0, 3));
                            ref2.current.focus();
                        } 
                      
                    }
                }}
                onPaste={handlePaste}
            />
            <input
                
                ref={ref4}
                maxLength="1"
                value={otp.slice(4,5)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyUp={(e) => {
                  
                    if (e.key == 'Backspace' && e.target.value.length!==1)
                    {console.log("bck 215")
                        ref3.current.focus()
                    }
                    else if(e.key == "ArrowLeft")
                    {
                        ref3.current.focus()
                    }
                    else if(e.key=="ArrowRight")
                    {
                        ref5.current.focus();
                    }
                    else
                    e.preventDefault()
                  
                }}
                onChange={(e) => {
                    if(e.target.value !== ' ' && e.target.value.length===1) {
                        console.log("yes it is printed 235")
                        if(isNaN(e.target.value))
                        console.log("Enter Numeric Value");
                        else
                        {
                            setOtp(otp + e.target.value);
                        ref5.current.focus();
                        }
                    } else {
                        if (e.target.value !== ' ') {
                          
                            setOtp(otp.slice(0, 4));
                            ref3.current.focus();
                        } 
                      
                    }
                }}
                onPaste={handlePaste}
            />
            <input
                
                ref={ref5}
                maxLength="1"
                value={otp.slice(5)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyUp={(e) => {
                   
                    if (e.key == 'Backspace' && e.target.value.length!==1)
                    {
                        ref4.current.focus()
                    }
                    else if(e.key == "ArrowLeft")
                    {
                        ref4.current.focus()
                    }
                    else
                    e.preventDefault()
                
                  
                }}
                onChange={(e) => {
                    if(e.target.value !== ' ' && e.target.value.length===1) {
                        console.log("yes it is printed")
                        if(isNaN(e.target.value))
                        console.log("Enter Numeric Value");
                        else
                        {
                            setOtp(otp + e.target.value);
                  
                        }
                        
                     
                    } else {
                        if (e.target.value !== ' ') {
                            
                            setOtp(otp.slice(0, 5));
                            ref4.current.focus();
                        } 
                      
                    }
                }}
                onPaste={handlePaste}
            />
        </div>
  )
}

export default Otp