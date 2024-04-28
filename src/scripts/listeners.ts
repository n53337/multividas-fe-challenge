import { handleImageUpload } from "./actions";
import { imageInput } from "./providers";

export const initApp = () => {
  imageInput?.addEventListener("change", () => {
    const image = imageInput!.files![0];
    handleImageUpload(image);
  });
};
