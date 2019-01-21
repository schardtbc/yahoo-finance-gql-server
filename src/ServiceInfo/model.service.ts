
import  ModelsType from "./model.type";

export default class ModelService {
  public static async query(args: object) {
    return new ModelsType();
  }
}