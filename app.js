var ipfsAPI = require('ipfs-api');

var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});

console.log("connected to the ipfs daemon");

const files = [
  {
    path: '/tmp/mytextfile.txt'
  }
]

ipfs.files.add(files, function (err, files) {
  // 'files' will be an array of objects containing paths and the multihashes of the files added
        if(err){
         return console.log(err);
        }

        console.log(files);
});

console.log('program ended');