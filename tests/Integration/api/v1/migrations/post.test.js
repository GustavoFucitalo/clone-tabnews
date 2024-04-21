import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}
test("DELETE to /api/v1/migrations should return 404", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();
  expect(response1Body.length).toBe(1);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });
  expect(response2.status).toBe(404);

  const response2Body = await response2.json();
  console.log("DELETE: " + response2Body);

  expect(response2Body.length).toBe(1);
});
