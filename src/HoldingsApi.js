export default class HoldingsApi {
    static async getAll() {
      return JSON.parse(localStorage.getItem("holdings-list") || "[]");
    }
  
    static async save(holdingsItems) {
      localStorage.setItem("holdings-list", JSON.stringify(holdingsItems));
    }
  }