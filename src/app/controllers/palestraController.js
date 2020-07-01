const db = require("../../database");

class palestraController {
  async store(req, res) {
    res.json({ ok: true });
  }
}

module.exports = new palestraController();
