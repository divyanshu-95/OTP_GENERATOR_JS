let genOTP=()=>{
    let d='0123456789';
    let otp='';
    for(let i=0;i<6;i++){
        let rand=Math.floor(Math.random()*d.length);
        otp+=d[rand];
    }
    return otp;
}

console.log(genOTP());
