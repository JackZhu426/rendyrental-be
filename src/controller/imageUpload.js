const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const { uploadFile } = require('./../config/s3');

exports.store = async (req, res) => {
  const file = req.file;

  // some place to apply filter to image

  const result = await uploadFile(file);
  console.log(result);
  await unlinkFile(file.path);
  res.send({ imagePath: `${result.Location}` });
};