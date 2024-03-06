import React from "react";

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [val, setval] = useState();
  const Navigate = useNavigate();
  const JoinRoom = useCallback(() => {
    Navigate(`/room/${val}`);
  },[val,Navigate]);
  return (
    <div>
      <input
        type="text"
        name=""
        value={val}
        id=""
        placeholder="Enter your Room code"
        onChange={e => setval(e.target.value)}
      />
      <button onClick={JoinRoom}>Join</button>
    </div>
  );
};

export default Home;

