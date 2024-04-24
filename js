const fs = require('fs');
const markdownToHtml = require('markdown-to-html').markdownToHtml;

fs.readFile('american_red_cross_website.md', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    markdownToHtml(data, (html) => {
        fs.writeFile('american_red_cross_website.html', html, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('HTML file generated successfully.');
        });
    });
});
