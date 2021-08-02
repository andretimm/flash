import supertest from "supertest";
import { app } from "../../src/app";

test("GET / Hello World", async () => {
  const res = await supertest(app).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello World!");
});
