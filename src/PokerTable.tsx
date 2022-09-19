import { Card } from "./Card";

import { useLocation } from "@solidjs/router";
import { roomName, setRoomName } from "./App";

const PokerTable = () => {
  const location = useLocation();
  setRoomName(location.pathname.split("/")[2]);
  return (
    <>
      <div class="w-screen">
        <div class="m-auto w-fit text-xl">Room: {roomName()}</div>
      </div>
      <div class="w-screen h-screen flex">
        <div class="flex m-auto flex-wrap gap-4 w-1/2">
          <Card cardText={"?"} cardValue={undefined} />
          <Card cardText={"0"} cardValue={0} />
          <Card cardText={"0.5"} cardValue={0.5} />
          <Card cardText={"1"} cardValue={1} />
          <Card cardText={"2"} cardValue={2} />
          <Card cardText={"3"} cardValue={3} />
          <Card cardText={"5"} cardValue={5} />
          <Card cardText={"8"} cardValue={8} />
          <Card cardText={"13"} cardValue={13} />
          <Card cardText={"20"} cardValue={20} />
          <Card cardText={"40"} cardValue={40} />
          <Card cardText={"100"} cardValue={100} />
        </div>
      </div>
    </>
  );
};

export default PokerTable;
