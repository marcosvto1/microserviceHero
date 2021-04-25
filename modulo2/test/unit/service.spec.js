const cote = require("cote");
const sinon = require("sinon");
const client = new cote.Requester({ name: "broker" });
const { expect } = require("chai");
require("dotenv").config();

describe("Teste Service Categories", () => {
  beforeEach(() => {
    require("../../server");
    const Connection = require("../../schemas/connection");
    Connection.connect();
  });

  it('Test categories Service "categorie.create"', async () => {
    const categorie = await new Promise((resolve) => {
      client.send(
        { type: "categorie.create", data: { name: "rwa" } },
        (res) => {
          resolve(res);
        }
      );
    });

    expect(categorie).to.eqls({ _id: categorie._id, name: categorie.name });
  });
});
