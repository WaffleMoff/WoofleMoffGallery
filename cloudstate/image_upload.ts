import { cloudstate } from "freestyle-sh";

type Image = {
  id: number;
  path: string;
};

@cloudstate
export class ImageUploadCS {
  static id = "imageUpload" as const;
  images: Image[] = [];

  uploadImage(image: any): { imageId: number; imagePath: string } {
    const imageId = this.images.length + 1;
    const imagePath = `/uploads/image_${imageId}.jpg`;

    // Simulate saving the image path (In a real setup, you would save the image to your server here)
    this.images.push({ id: imageId, path: imagePath });

    return { imageId, imagePath };
  }

  getImage(imageId: number): string | null {
    const image = this.images.find(img => img.id === imageId);
    return image ? image.path : null;
  }

  getAllImages(): Image[] {
    return this.images;
  }
}
