const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-f9a46d7e-a87c-4113-a26f-3f030b8769cf',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
  
    return imageParams;
  };

  module.exports = params;