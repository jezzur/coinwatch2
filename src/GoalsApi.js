export default class GoalsApi {
    static async getAll() {
      return JSON.parse(localStorage.getItem("goals-list") || "[]");
    }
  
    static async save(goalItems) {
      localStorage.setItem("goals-list", JSON.stringify(goalItems));
    }
  }