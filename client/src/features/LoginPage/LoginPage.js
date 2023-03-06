import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";

const Login = () => {
  return (
    <div data-testid="login" className="login-page">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default Login;
