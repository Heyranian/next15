"use client";

import registerUserAction from "@/lib/actions";
import { redirect, useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { useFormState } from "react-dom";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    registerUserAction,
    null
  );

  if (state?.token) {
    return router.push("/");
  }

  // console.log(state);

  return (
    <div
      className="flex justify-center p-2
     items-center h-screen"
    >
      <div>{state && <p>{state?.name}</p>}</div>

      <form
        action={formAction}
        className="flex flex-col p-4 gap-4 bg-white text-red-500 "
      >
        <input
          className="border border-gray-500 p-2"
          type="text"
          name="username"
          placeholder="username"
          required
        />
        <input
          className="border border-gray-500 p-2"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">{isPending ? "Loading..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default Login;
