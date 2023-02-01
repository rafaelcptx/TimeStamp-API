let express = require("express");
let app = express();

// Challenge (TimeStamp API) para obtenção do Certificado: BackEnd Development and APIs da freeCodeCamp.

// A API precisa passar, dentre outros... os seguintes testes:

/*   A request to /api/:date? with a valid date should return a JSON object 
with a utc key that is a string of the input date 
in the format: Thu, 01 Jan 1970 00:00:00 GMT   */

/*  A request to /api/1451001600000 should return 
{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }   */
app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date?", (req, res) => {
  let date = req.params.date;
  let parsed = new Date(date).toString();

  if (new Date(date) != "Invalid Date") {
    res.json({
      unix: Math.floor(new Date(parsed)),
      utc: new Date(date).toUTCString(),
    });
  } else if (typeof parseInt(date) == "number" && date > 0) {
    let unix = parseInt(date);
    res.json({
      unix: unix,
      utc: new Date(unix).toUTCString(),
    });
  } else {
    res.json({
      error: "Invalid Date",
    });
  }
});

app.listen(5090);
