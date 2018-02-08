const wkhtmltopdf = require('./index');
const fs = require('fs');

wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
    .pipe(fs.createWriteStream('out.pdf'));