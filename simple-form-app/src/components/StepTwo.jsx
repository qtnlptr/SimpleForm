const StepTwo = (props) => {
  const { username, password, password2, email, submitted } = props;

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
    }}
  >
    <h2>Results</h2>
    <div className="Results">
      <div className="results-details">
        <p>Name: </p> <p>{username}</p>
      </div>
      <div className="results-details">
        <p>Email: </p> <p>{email}</p>
      </div>
      <div className="results-details">
        <p>Password: </p> <p>{password}</p>
      </div>
    </div>
  </div>;
};

export default StepTwo;
