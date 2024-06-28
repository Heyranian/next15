"use server";
import { cookies } from "next/headers";

export default async function registerUserAction(
  prevState: any,
  queryData: FormData
) {
  console.log("Hello From Register User Action");
  console.log("Hello From Register User Action", queryData);

  try {
    const fields = {
      username: queryData.get("username") as string,
      password: queryData.get("password") as string,
    };

    // Use a secure API endpoint (replace with your actual backend URL)
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    const data = await response.json(); // Parse the response data

    // console.log(data);
    cookies().set({
      name: "token",
      value: data?.token,
      httpOnly: true,
      path: "/",
    });

    return data;
  } catch (error) {
    console.error("Authentication error:", error);
    return error;
  }

}


