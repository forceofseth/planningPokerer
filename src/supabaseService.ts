import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { supabase } from "./supabaseClient";
import uniqid from "uniqid";

const createRoom = async () => {
  const roomId = uniqid("room-");
  const { data, error } = await supabase
    .from("room")
    .insert([{ name: roomId }])
    .select();
  return data;
};

const createUser = async (userName: string) => {
  if (!userName) {
    userName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
  }
  const { data, error } = await supabase
    .from("user")
    .insert([{ name: userName }])
    .select();
  return data;
};

const createEstimate = async (roomId: number, userId: number) => {
  const { data, error } = await supabase
    .from("estimate")
    .insert([{ room_id: roomId, user_id: userId }]);
};

export const setupRoomWithUser = async (userName: string) => {
  const room = await createRoom();
  const user = await createUser(userName);
  createEstimate(room[0].id, user[0].id);
};
