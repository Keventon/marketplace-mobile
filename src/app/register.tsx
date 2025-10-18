import { RegisterView } from "../viewModels/Register/registerView";
import { userRegisterViewModel } from "../viewModels/Register/userRegisterViewModel";

export default function Register() {
  const props = userRegisterViewModel();

  return <RegisterView {...props} />;
}
