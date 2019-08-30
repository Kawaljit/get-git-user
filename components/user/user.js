import './user.scss';

const User = (props) => (
  <div className="git-user-card">
    <div className="git-userBio">
      <img src={props.userData.avatar_url} className="git-userAvatar"/>
      <h1 className="git-userName">{props.userData.name}</h1>
      <p className="git-userBioText">{props.userData.bio}</p>
      <span className="git-userCompany">{props.userData.company}</span>
    </div>
    <div className="git-userStats">
      <div className="git-userStatsCard">asdf</div>
      <div className="git-userStatsCard">asdf</div>
      <div className="git-userStatsCard">afsd</div>
    </div>
  </div>
);

export default User;