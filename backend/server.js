const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

function _0x2844() {
  var _0x3be514 = [
    "s://github",
    "262535TaRHEk",
    "803osKDQO",
    "216XlrDCC",
    "265teQGfw",
    "216135OJKboi",
    "4MSukPZ",
    "93609mCnelo",
    "send",
    "nning\x20@piy",
    ".com/piyus",
    "MemeTem\x20-\x20",
    "Backend\x20is",
    "YIkTP",
    "\x20Up\x20and\x20Ru",
    "hpatelcode",
    "109490umBbSM",
    "16292gDKaGH",
    "352592StQjaF",
    "2213658cZxmfN",
    "get",
    "ushpatelco",
    "des\x20:\x20http",
  ];
  _0x2844 = function () {
    return _0x3be514;
  };
  return _0x2844();
}
var _0x1f3089 = _0x31a5;
function _0x31a5(_0x853f7a, _0x542700) {
  var _0x351988 = _0x2844();
  return (
    (_0x31a5 = function (_0x54cfc0, _0x14436f) {
      _0x54cfc0 = _0x54cfc0 - (-0x739 + 0x47 * -0x1b + 0xf23);
      var _0x57141f = _0x351988[_0x54cfc0];
      return _0x57141f;
    }),
    _0x31a5(_0x853f7a, _0x542700)
  );
}
(function (_0x8ddf5f, _0x35741c) {
  var _0x40524a = _0x31a5,
    _0x3a559c = _0x8ddf5f();
  while (!![]) {
    try {
      var _0x291553 =
        parseInt(_0x40524a(0x82)) /
          (-0x48 * 0x18 + 0x6 * 0x119 + -0x1 * -0x2b) +
        (-parseInt(_0x40524a(0x76)) / (-0x195e + -0xcf4 + 0x37c * 0xb)) *
          (parseInt(_0x40524a(0x75)) / (-0x1ff2 + 0x18b3 * 0x1 + 0x742)) +
        (-parseInt(_0x40524a(0x81)) / (-0x252a + -0x9e * 0x30 + 0x42ce)) *
          (-parseInt(_0x40524a(0x74)) / (0x1e2c + -0xf1c + 0xf0b * -0x1)) +
        parseInt(_0x40524a(0x83)) / (-0x2 * 0x91d + -0x1806 + 0x2 * 0x1523) +
        -parseInt(_0x40524a(0x71)) / (-0x7 * -0x43 + 0x2384 + 0x1 * -0x2552) +
        (parseInt(_0x40524a(0x73)) / (0x1 * 0x102f + 0x209 * -0xb + 0x63c)) *
          (parseInt(_0x40524a(0x77)) / (0x1 * -0x2523 + 0xcd0 + 0xc2e * 0x2)) +
        (-parseInt(_0x40524a(0x80)) / (0x1 * 0x1343 + 0x1768 + -0x617 * 0x7)) *
          (parseInt(_0x40524a(0x72)) / (0x1ae8 + -0x23f5 + -0x8 * -0x123));
      if (_0x291553 === _0x35741c) break;
      else _0x3a559c["push"](_0x3a559c["shift"]());
    } catch (_0x22afa0) {
      _0x3a559c["push"](_0x3a559c["shift"]());
    }
  }
})(_0x2844, 0x51ced + -0x4c2fc + 0x3453e),
  app[_0x1f3089(0x6d)]("/", (_0x2be69d, _0x536d74) => {
    var _0xf41a47 = _0x1f3089,
      _0x5b4271 = {
        YIkTP:
          _0xf41a47(0x7b) +
          _0xf41a47(0x7c) +
          _0xf41a47(0x7e) +
          _0xf41a47(0x79) +
          _0xf41a47(0x6e) +
          _0xf41a47(0x6f) +
          _0xf41a47(0x70) +
          _0xf41a47(0x7a) +
          _0xf41a47(0x7f) +
          "s/",
      };
    _0x536d74[_0xf41a47(0x78)](_0x5b4271[_0xf41a47(0x7d)]);
  });

// Scraping route
app.get("/scrape", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const memes = [];

    // Scrape image URLs and alt text
    $(".mt-box").each((index, element) => {
      const img = $(element).find("img.shadow");
      const src = img.attr("src") ? `https:${img.attr("src")}` : "";
      const alt = img.attr("alt") || "";
      const category  = "TOP";

      if (src) {
        memes.push({ src, alt ,category });
      }
    });

    res.json(memes);
  } catch (error) {
    console.error("Error scraping the page:", error);
    res.status(500).send("Error scraping the page");
  }
});

app.listen(PORT, () => {
  console.log(
    "\u001b[34m",
    "Server running on PORT",
    PORT,
    "\u001b[34m",
    `http://localhost:${PORT}/`
  );
});
