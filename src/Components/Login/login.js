import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

function Login(props) {
  const navigate = useNavigate();
  const { setUser } = props;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submit = (e) => {
    e.preventDefault();
    setUser(formData.username);
    navigate("/user");
  };

  return (
    <div className={styles.login} style={{ backgroundImage: `url("/nasa.jpg")` }}>
      <form onSubmit={submit} className={styles.form}>
        <h2>NASA API</h2>

        <input
          name="username"
          placeholder="Username"
          className={styles.input}
          required
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          className={styles.input}
          required
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
