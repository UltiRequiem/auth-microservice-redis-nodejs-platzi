import DB from "../../../store/dummy.js";

export async function list() {
  return DB.get("numbers");
}

export async function create(data) {
  return DB.set("numbers", data);
}
