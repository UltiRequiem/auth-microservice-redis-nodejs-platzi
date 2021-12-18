import DB from "../../../store/dummy.js";

export function list() {
  return DB.get("numbers");
}
