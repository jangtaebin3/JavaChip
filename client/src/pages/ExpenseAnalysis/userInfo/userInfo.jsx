import './userInfo.css';
const UserProfile = ({isLogin,userIcon,userName}) => {
    console.log("Rendering UserProfile");
    return isLogin ? (
        <div className="EAuserInfo">
            <img className="EAuserIcon" alt='userIcon' src={userIcon} />
            <div className="EAuserName">{userName}</div>
        </div>
    ) 
    :(
        <div className="EAuserInfo">
            <a className="EAtoLogin" href="/client/src/pages/Auth/Login/index.jsx">
                <img className="EAuserIcon" alt='userIcon' src={userIcon} />
                <div className="EAuserName">{userName}</div>
            </a>
        </div>
    );
};

export default UserProfile;
