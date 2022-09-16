import { createResource, createSignal } from "solid-js";
import { supabase } from "./supabaseClient";
import { setupRoomWithUser } from "./supabaseService";

export const CreateRoom = () => {
  const [input, setInput] = createSignal("");

  return (
    <form>
      <div class="w-screen h-screen flex">
        <div class="m-auto w-fit flex flex-col gap-4 items-start">
          <label class="font-bold text-xl" for="username">
            Create Room
          </label>
          <div class="flex gap-4">
            <input
              class="border-black border p-2"
              id="username"
              placeholder="Username"
              onInput={(e) => {
                setInput(e.currentTarget.value);
              }}
            />
            <button
              class="border p-2 rounded-md hover:bg-gray-200 active:translate-y-0.5 transition"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setupRoomWithUser(input());
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
