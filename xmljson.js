var xml2json = require('xml-to-json');
var program = require('commander');

program
    .arguments('<inputfile>,   [outputfile]')
    .action(function(inputfile, outputfile)
    {
        xml2json({
            input: inputfile,
            output: outputfile,
        }, function(err, result) {

            if(err) {
                console.error(err);
            } else {
                console.log(result);
            }

        });
    });

program.parse(process.argv);