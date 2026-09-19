const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const filesRenamed = [];

async function optimizeImages(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        if (!file.startsWith('temp_')) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                await optimizeImages(fullPath);
            } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
                try {
                    const buffer = fs.readFileSync(fullPath);
                    const metadata = await sharp(buffer).metadata();
                    const isLargeSize = stat.size > 500 * 1024; // > 500 KB
                    const isTooWide = metadata.width > 1920;
                    
                    const needsOptimization = !file.toLowerCase().endsWith('.webp') || isTooWide || isLargeSize;

                    if (needsOptimization) {
                        console.log(`Optimizing: ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
                        
                        let image = sharp(buffer);
                        if (isTooWide) {
                            image = image.resize({ width: 1920, withoutEnlargement: true });
                        }
                        
                        const newFileName = file.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
                        const newFullPath = path.join(dir, newFileName);
                        
                        // we can overwrite safely because we used a buffer
                        await image.webp({ quality: 80 }).toFile(newFullPath);
                        
                        if (newFullPath !== fullPath) {
                            fs.unlinkSync(fullPath); // Delete old jpg/png
                            filesRenamed.push({ from: file, to: newFileName });
                        }
                    }
                } catch (err) {
                    console.error(`Error processing ${file}:`, err.message);
                }
            }
        }
    }
}

async function main() {
    await optimizeImages(publicImagesDir);
    console.log("Renamed Files (this run):", filesRenamed.length);
}

main();
