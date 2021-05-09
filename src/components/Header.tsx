import React from "react";

type HeaderProps = {
  username: string;
  score: number;
};

function Header({ username, score }: HeaderProps) {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{score}</h2>
    </div>
  );
}

export default Header;
