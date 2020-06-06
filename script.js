let net = require('net');

let server = net.createServer(function(conn){
    console.log('-------------');

    conn.on('data', function(data){
        console.log(data + 'from ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Repeating: ' + data);
    });

    conn.on('close', function () {
        console.log('Client closed connection.');
    });

}).listen(8124);

console.warn("Listening on port 8124 \n\n");