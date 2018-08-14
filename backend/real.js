let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const cors = require("cors");
var request = require('request');



app.use(cors());
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/:place/:type/:priceMin/:priceMax/:bedroomMin/:bedroomMax/:results/:sortresult", function(req,res){
  let place = req.params.place
  let type = req.params.type
  let priceMin = req.params.priceMin
  let priceMax = req.params.priceMax
  let bedroomMin = req.params.bedroomMin
  let bedroomMax = req.params.bedroomMax
  let results = req.params.results
  let sort = req.params.sortresult
  request(`https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=${type}&place_name=${place}&price_min=${priceMin}&price_max=${priceMax}&bedroom_min=${bedroomMin}&bedroom_max=${bedroomMax}&number_of_results=${results}&sort=${sort}`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var body = JSON.parse(body)
      return res.status(200).json(body);
    }
  })
})

let port = process.env.PORT || 8080
app.listen(port, function(){
    console.log('sever running')
});
