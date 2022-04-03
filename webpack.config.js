const path = require('path');

module.exports = {
    entry: 'node_modules / pdfjs - dist / legacy/ build / pdf.worker.min.js;',
   
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {

            'pdfjs-dist': path.resolve('./node_modules/pdfjs-dist/legacy/build/pdf.js'),
        },
    },
};