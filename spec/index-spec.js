const request    = require('supertest');
const express    = require('express');

const middleware = require('../src');

describe("Auth", () => {
  let app = null;
  beforeEach(() => {app = express()})

  it("should call auth fn", (done) => {
    app.get(
      "/test",
      middleware(() => Promise.resolve({id: 1})),
      (req, res) => res.status(200).json(req.user)
    )

    request(app)
      .get('/test')
      .expect(200, {id: 1}, done);
  });

  it("should reply with 401 on auth fail", (done) => {
    app.get(
      "/test",
      middleware(() => Promise.reject({error: "missing user"})),
      (req, res) => res.status(200).json(req.user)
    )

    request(app)
      .get('/test')
      .expect(401, {error: "missing user"}, done);
  });
});
