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
  res.send({
    unix: Math.floor(new Date()),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date?", (req, res) => {
  let regex = /^\d{4}-\d{2}-\d{2}$/;
  let input = new Date(req.params.date).toString();
  let arrayDate = input.split(" ");

  if (req.params.date.match(regex)) {
    if (arrayDate[5] === undefined) {
      res.send({
        error: "Invalid Date",
      });
    }
    res.send({
      unix: Math.floor(new Date(input)),
      utc: new Date(req.params.date).toUTCString(),
    });
  } else if (
    typeof parseInt(req.params.date) == "number" &&
    req.params.date > 0
  ) {
    res.send({
      unix: parseInt(req.params.date),
      utc: new Date(parseInt(req.params.date)).toUTCString(),
    });
  } else {
    res.send({
      error: "Invalid Date",
    });
  }
});

app.listen(5090);
