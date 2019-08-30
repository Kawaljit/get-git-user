import './user.scss';
const User = (props) => (
  <div className="git-user-card">
    <div className="git-userBio">
      <img src={props.userData.avatar_url} className="git-userAvatar"/>
      <h1 className="git-userName">{props.userData.name}</h1>
      <p className="git-userBioText">{props.userData.bio}</p>
      <p className="git-userCompany">{props.userData.company}</p>
      <p className="git-userCompany">{props.userData.location}</p>
      <span>{props.userData.followers}</span>
      <span>{props.userData.following}</span>
      <p>
        <a href={props.userData.html_url}>Check on Github</a>
      </p>
    </div>
    <div className="git-userStats">
      <div className="git-userStatsCard"></div>
      <div className="git-userStatsCard"></div>
      <div className="git-userStatsCard"></div>
    </div>
  </div>
);

export default User;