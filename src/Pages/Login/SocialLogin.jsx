import useAuth from "../../hooks/UseAuth";

const SocialLogin = () => {
    const {googleLogin} = useAuth()

    const handleSocialLogin=(media)=>{
        media()
        .then(res => console.log(res.user))
        .then(error => console.error(error.message))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-primary btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;