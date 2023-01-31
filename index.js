let express = require("express");
let app = express();

// Challenge (TimeStamp API) para obtenção do Certificado: BackEnd Development and APIs da freeCodeCamp.

// A API precisa passar, dentre outros... os seguintes testes:

/*   A request to /api/:date? with a valid date should return a JSON object 
with a utc key that is a string of the input date 
in the format: Thu, 01 Jan 1970 00:00:00 GMT   */

/*  A request to /api/1451001600000 should return 
{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }   */

app.get("/api/:date?", (req, res) => {
  let input = new Date(req.params.date).toString();
  let arrayDate = input.split(" ");
  let day = arrayDate[0];
  let month = arrayDate[1];
  let date = arrayDate[2];
  let year = arrayDate[3];
  let hours = arrayDate[4];
  let gmt = arrayDate[5].slice(0, 3);

  let unix = Math.floor(new Date(input));

  res.send({
    unix: unix,
    utc: `${day}, ${date} ${month} ${year} ${hours} ${gmt}`,
  });
});

app.listen(5080);
