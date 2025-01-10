import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import path from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url); //gives the filepath
const __dirname = dirname(__filename); //gives the root path

// Configure dotenv
dotenv.config({ path: resolve(__dirname, '../../config/.env') }); // Path to env file

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dubch5hac',
    api_key: process.env.CLOUDINARY_API_KEY || '917891854289438',
    api_secret: process.env.CLOUDINARY_API_SECRET || '_mxnu4w_dLnDIJfr1Qn5e6RlNx8',
});

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Cloudinary folder name
        allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file formats
        resource_type: 'image',
    },
});

// Multer configuration with file filter
export const upload = multer({
    storage,
    limits: { fileSize: 15 * 1024 * 1024 }, // Max file size: 15MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
        }
        cb(null, true);
    },
}).fields([
    { name: 'CNIC_Front_Image', maxCount: 1 },
    { name: 'userImage', maxCount: 1 }
]);
