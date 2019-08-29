const CustomError = (props) => (
  props && <div className="git-error">
    <p>{props.customError.status === 404 ? 'User not found' : `There is some error: ${props.customError.statusText}`}</p>
    <style jsx>{`
      .git-error {
        color: red;
      };
    `}</style>
  </div>
);

export default CustomError;