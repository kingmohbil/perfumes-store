import { NextApiRequest, NextApiResponse } from 'next';
interface newRequest extends NextApiRequest {
  file: {};
}
import nc from 'next-connect';

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req: NextApiRequest, file: any, cb: any) {
    cb(null, 'public/uploads');
  },
  filename: function (req: NextApiRequest, file: any, cb: any) {
    cb(
      null,
      `${new Date().toISOString().replace(/:/g, '-') + file.originalname}`
    );
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage,
});

const uploadFile = upload.single('productImage');

const handler = nc()
  .use(uploadFile)
  .post(async (req: newRequest, res: NextApiResponse) => {
    console.log(req?.file);
    console.log(req.body);
    res.json({ name: 'error' });
  });

export default handler;
