import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.unsplash.com/photo-1669703437202-e465b9acf89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      places: 3,
    },
  ];

  return (
    <>
      <UsersList items={USERS} />
    </>
  );
}
