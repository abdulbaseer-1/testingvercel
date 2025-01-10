import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import path from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url); //gives the filepath
const __dirname = dirname(__filename); //gives the root path

// Configure dotenv
dotenv.config({ path: resolve(__dirname, '../../config/.env') }); // Path to env file

// configuring the storage location for files and the naming system(what to name)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
    api_key: process.env.CLOUDINARY_API_KEY || 'your-api-key',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'your-api-secret',
});

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Cloudinary folder name
        allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file formats
        resource_type: 'image', // Ensures only images are uploaded
    },
});

// Multer configuration with Cloudinary storage and file filter
export const upload = multer({
    storage,
    limits: { fileSize: 15 * 1024 * 1024 }, // Max file size (15mb)
    fileFilter: (req, file, cb) => {
        console.log('File received by fileFilter:', file);  // This will now execute because you're using Cloudinary storage
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
        }
        cb(null, true);
    }
}).fields([
    { name: 'CNIC_Front_Image', maxCount: 1 },
    { name: 'ReporterImage', maxCount: 1 },
    { name: 'ProofImage', maxCount: 1 }
]);