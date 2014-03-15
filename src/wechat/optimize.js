var cheerio = require('cheerio');
var minify = require('html-minifier').minify;

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' HTMLFILE');
  process.exit(1);
}
var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    $ = cheerio.load(data);

    $('head>link').remove();
    $('head').append('<link href="app.css" rel="stylesheet">');

    $('body>script[type*=javascript]').remove();
    $('body').append('<script type="text/javascript" src="app.js"></script>');

    var input = $.html();
    var output = minify(input, {removeComments:true, collapseWhitespace:true});

    process.stdout.write(output);
});