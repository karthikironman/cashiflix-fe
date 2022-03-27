import a from "./apihelper"

const apihelper = new a();
const base_address = process.env.REACT_APP_SERVER_URL;
console.log("BASE ADDRESS READ FROM ENV", base_address)
class onboardingService {
    triggerOtp(phone){
        const url = base_address + "/api/v1/send_otp";
        return apihelper.post(url,{phone})
    }
    verifyOtp(phone,otp){
        const url = base_address + "/api/v1/verify_otp";
        return apihelper.post(url,{phone,otp})
    }
    signup(name,phone,otp,password){
        const url = base_address + "/api/v1/user";
        return apihelper.post(url,{name,phone,otp,password})
    }
}
export default onboardingService;