var fs = require('fs')
var ncp = require('ncp').ncp
var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

var entry = './startpage.md'
var output = './build/index.html'

unified()
    .use(markdown)
    .use(html)
    .process(fs.readFileSync(entry), function (err, file) {
        if (err) throw err
        fs.writeFile(output, String(file), function (err) {
            return console.log(err)
        })
        return console.log('Written ' + output);

    })

ncp('./static', './build', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('Copied static assets');
        })

