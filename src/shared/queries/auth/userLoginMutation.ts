import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/authService";
import { RegisterHttpParams } from "../../interfaces/http/register";
import { LoginHttpParams } from "../../interfaces/http/login";
import { useUserStore } from "../../store/userStore";

export function useLoginMutation() {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => authService.login(userData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}
