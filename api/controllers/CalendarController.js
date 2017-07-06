
module.exports = {

  load: function (req, res) {
  	// var fs = require('fs');
  	// var obj=JSON.parse(fs.readFileSync('./events.json','utf8'));
  	// console.log(obj)

  var fs = require('fs');
  var obj;
  fs.readFile('./events.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj)
  res.view('propiedad/calendar',{
    eventos : obj
  });

});
}
}
