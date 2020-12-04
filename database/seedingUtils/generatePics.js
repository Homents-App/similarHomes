const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AWS = require('aws-sdk');


async function download(number) {
  for (var i = 0; i < number; i++) {
    var url = `https://loremflickr.com/1536/1152/house,exterior/all`;
    const folder = path.resolve(`./database/photos`,`${i}.jpg`);

    const pic = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    })

    pic.data.pipe(fs.createWriteStream(folder))
  }
}



download(1000);


160, 224