import app from "../../rest";
import supertest from "supertest";
import createToken from "../../services/createToken";

describe("http server root endpoint", () => {
  let server = {};
  let token = "";
  const env = process.env.TOKEN_SECRET;

  beforeEach(() => {
    process.env.TOKEN_SECRET = "anything";
    server = supertest(app);
    token = `Bearer ${createToken.createToken({
      id: 1,
      email: "trial@email.com",
    })}`;
  });

  afterEach(() => {
    process.env.TOKEN_SECRET = env;
  });

  it("should return text/html", async () => {
    const response = await server.get("/").set("Authorization", token);
    expect(response.headers["content-type"]).toMatch(/.?text\/html.?/);
  });

  it("should give 401 status when the token is invalid", async () => {
    token = "example";
    const response = await server.get("/").set("Authorization", token);
    expect(response.status).toBe(401);
  });

  it("should give 200 status", async () => {
    const response = await server.get("/").set("Authorization", token);
    expect(response.status).toBe(200);
  });

  it("should give 401 status, without token", async () => {
    const response = await server.get("/");
    expect(response.status).toBe(401);
  });

  it("should greet user", async () => {
    const response = await server.get("/").set("Authorization", token);
    expect(response.text).toMatch(/.?Hello, this is the Weather Backend app.?/);
  });
});
