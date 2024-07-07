const UserLogin=(props)=>{
    return <h1>Welcome User!</h1>;
}
function GuestLogin(props){
    return <h1>Please SignUp!</h1>;
}
const SignUp=(props)=>{
    const flag=props.isLoggedIn;
    if(flag){
        return <UserLogin/>
    }
    return <GuestLogin/>
}
export default SignUp;
