const User = (props) => (
  <div className="git-userInfo">
    <img src={props.userData.avatar_url} className="git-userAvatar"/>
    <h1  className="git-userName">{props.userData.name}</h1>
    <span className="git-userCompany">{props.userData.company}</span>
    <style jsx>{`
      .git-userAvatar {
        display: block;
        width: 200px;
        height: auto;
      };
    `}</style>
  </div>
);

export default User;