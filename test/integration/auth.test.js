import request from "supertest";
import app from "../../index";
import { parseData } from "../../utils/helpers";
import { testUserData, invalidRegisterUserData, testUserLogin } from "../dummyData/test-data";

// Register User
describe("POST /api/auth/register", () => {
  test("should register a user", async () => {
    const response = await request(app).post("/api/auth/register").send(testUserData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user._id");
    expect(response.body.user._id).not.toBeNull();
  });
});

describe("POST /api/auth/register", () => {
  test("should give an error", async () => {
    const response = await request(app).post("/api/auth/register").send(invalidRegisterUserData);

    expect(response.status).toBe(400);
    expect({ error: "Name, Email and Password Are Required" });
  });
});

// Login
describe("POST /api/auth/login", () => {
  test("should give an error", async () => {
    const response = await request(app).post("/api/auth/sign-in").send(testUserLogin);

    expect(response.status).toBe(200);
    expect(response.token).not.toBeNull();
  });
});
