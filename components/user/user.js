import './user.scss';
const User = (props) => (
  <div className="git-user-card">
    <div className="git-userBio">
      <img src={props.userData.avatar_url} className="git-userAvatar"/>
      <h1 className="git-userName">{props.userData.name}</h1>
      <p className="git-userBioText">{props.userData.bio}</p>
      <ul className="git-userVcard">
        <li className="list">
          <span>
            {props.userData.company}
          </span>
        </li>
        <li className="list">
          <span>
            {props.userData.location}
          </span>
        </li>
        <li className="list">
          <a href={props.userData.html_url}>Check on Github</a>
        </li>
      </ul>
    </div>
    <div className="git-userStats">
      <div className="git-userStatsCard"></div>
      <div className="git-userStatsCard">
        <span>Followers on github{props.userData.followers}</span>
        <span>Following on github: {props.userData.following}</span>
      </div>
      <div className="git-userStatsCard"></div>
    </div>
  </div>
);

export default User;