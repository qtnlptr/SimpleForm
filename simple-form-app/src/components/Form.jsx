const Form = (props) => {
  const { username, password, password2, email, submitted } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === password2) {
      setSubmitted(!submitted);
    } else {
      alert("Veuillez rentrer le même mot de passe");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <input
        type="text"
        placeholder="Jean Dupont"
        name="username"
        required={true}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <input
        type="email"
        placeholder="jean.dupont@email.com"
        name="email"
        required={true}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        name="password"
        required={true}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
      />
      <input
        type="password"
        placeholder="Confirmer votre mot de passe"
        name="password2"
        required={true}
        onChange={(event) => {
          setPassword2(event.target.value);
        }}
        value={password2}
      />
      <input
        type="submit"
        value="Confirmer"
        style={{ backgroundColor: "black", color: "white", padding: "16px" }}
      />
    </form>
  );
};

export default Form;
