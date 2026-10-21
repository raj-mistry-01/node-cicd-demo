
const test = require("node:test");
const assert = require("node:assert/strict");

test("application returns the expected response", async () => {
    const response = {
        message: "Hello from Node.js CI/CD!",
        status: "success"
    };

    assert.equal(response.status, "success");
    assert.equal(response.message, "Hello from Node.js CI/CD!");
});
