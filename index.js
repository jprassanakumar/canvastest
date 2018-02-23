var express  = require('express'),
  bodyParser = require('body-parser'),
  app        = express(),
  path       = require('path'),
  CryptoJS   = require("crypto-js");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json()); // create application/json parser
app.use(bodyParser.urlencoded({ entended: true })); //create application/x-www-urlencoded parser

var views = path.join(__dirname, 'public/views');

app.get('/', function (req, res) {
  res.sendFile(path.join(views, 'index.html'));
});

app.post('/', function (req, res) {

	var shared = "5086c922aa1b7218444b8e5ee0f2e8b818112bce";
  // Grab signed request
  var signed_req = req.body.signed_request;
  // split request at '.'
  var hashedContext = signed_req.split('.')[0];
  console.log(hashedContext)
  var context = signed_req.split('.')[1];
  // Sign hash with secret
  var hash = CryptoJS.HmacSHA256(context, shared); 
  // encrypt signed hash to base64
  var b64Hash = CryptoJS.enc.Base64.stringify(hash);

  if (hashedContext === b64Hash) {
   // res.sendFile(path.join(views, 'index.html'));
  } else {
    //res.send("authentication failed");
  };  


  res.sendFile(path.join(views, 'index.html'));


  var signedRequest = req.body.signed_request;
    // Base64-decode the second part of the signed request.
    var decodedRequest = Desk.canvas.decode(signedRequest.split('.')[1]);
    // The result is a JSON representation of the context. Let's parse that into a Javascript object.
    var contextObj = JSON.parse(decodedRequest);
    // Let's show what we actually get back.
	console.log(signedRequest);
    var contextElem = Desk.canvas.byId('context');
    var greetingElem = Desk.canvas.byId('greeting');
    greetingElem.innerHTML = 'Hi ' + contextObj.context.user.fullName + '!';
    // Using JSON.stringify here because this will look much nicer than just showing `decodedRequest`.
    contextElem.innerHTML = JSON.stringify(contextObj, undefined, 2);
    // We can also store this so we can reference it later without having to use a global variable.
    Desk.canvas.client.signedrequest(contextObj);


});

var port = process.env.PORT || 9000;
app.listen(port);
console.log('Listening on port ' + port);
