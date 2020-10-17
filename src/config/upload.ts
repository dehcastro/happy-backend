import path from 'path';
import multer from 'multer';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fixedFileName = file.originalname.replace(/ /g, '_').replace(/\(/g, '_').replace(/\)/g, '_');
            const filename = `${Date.now()}-${fixedFileName}`;

            cb(null, filename);
        },
    }),
};