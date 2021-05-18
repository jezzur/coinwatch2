export default class HoldingsApi {
    static async getAll() {
      return JSON.parse(localStorage.getItem("coin-list") || "[]");
    }
  
    static async save(items) {
      localStorage.setItem("coin-list", JSON.stringify(items));
    }
  }