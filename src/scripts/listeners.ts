import { handleGrayscaleChange, handleImageUpload } from "./actions";
import { grayscaleInput, imageInput } from "./providers";

export const initApp = () => {
  // Image Setter
  imageInput?.addEventListener("change", () => {
    const image = imageInput!.files![0];
    handleImageUpload(image);
  });

  // Filter Setters
  grayscaleInput?.addEventListener("input", () => {
    handleGrayscaleChange();
  });
};
