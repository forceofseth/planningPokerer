import { createSignal } from "solid-js";
import { setupRoomWithUser } from "./supabaseService";
import { useNavigate } from "@solidjs/router";
import { setRoomName } from "./App";

export const CreateRoom = () => {
  const [input, setInput] = createSignal("");
  const navigate = useNavigate();

  return (
    <form>
      <div class="w-screen h-screen flex">
        <div class="m-auto w-fit flex flex-col gap-4 items-start">
          <label class="font-bold text-xl" for="username">
            Create Room
          </label>
          <div class="flex gap-4">
            <input
              class="border-black border p-2 rounded"
              id="username"
              placeholder="Username"
              onInput={(e) => {
                setInput(e.currentTarget.value);
              }}
            />
            <button
              class="border p-2 rounded-md hover:bg-gray-200 active:translate-y-0.5 transition"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const roomName = await setupRoomWithUser(input());
                navigate(`/room/${roomName}`);
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
