
// import { useMutation } from "@tanstack/react-query";
// import { SignIn } from "../_types/signin.types";
// import { createData } from "@/core/http-service";

// const signIn = (model: SignIn): Promise<void> =>
//     createData<SignIn, void>("/signin", model);

// type UseSignInOptions = {
//     onSuccess?: () => void;
// };

// export const useSignIn = ({onSuccess}: UseSignInOptions) => {
//    const {mutate:submit, isPending} = useMutation({
//         mutationFn: signIn,
//         onSuccess: onSuccess
//     });

//     return {
//         submit, isPending
//     }
// }