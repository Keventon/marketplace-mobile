import { LoginView } from "../viewModels/Login/LoginView";
import { useLoginViewModel } from "../viewModels/Login/useLoginViewModel";

export default function Login() {
  const props = useLoginViewModel();

  return <LoginView {...props} />;
}
