import useAuth from "../../hooks/UseAuth";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth()

    const handleSocialLogin=(media)=>{
        media()
        .then(res => console.log(res.user))
        .then(error => console.error(error.message))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-primary btn-sm">Google</button>
                <button onClick={()=>handleSocialLogin(githubLogin)} className="btn btn-primary btn-sm">Github</button>
            </div>
        </>
    );
};

export default SocialLogin;