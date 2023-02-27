import { createServer } from "miragejs";

const createMirageServer = () => {
  createServer({
    routes() {
      this.get("/api/test", () => ({
        test: "test",
        itWorks: true,
        reminders: [],
      }));
    },
  });
};

export { createMirageServer };
