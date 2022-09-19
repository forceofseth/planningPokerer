import { Component, createSignal, Show } from "solid-js";
import { CreateRoom } from "./CreateRoom";
import PokerTable from "./PokerTable";
import { Routes, Route } from "@solidjs/router";
export const [roomName, setRoomName] = createSignal("");

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" component={CreateRoom} />
        <Route path="/room/:roomName" component={PokerTable} />
      </Routes>
    </>
  );
};

export default App;
