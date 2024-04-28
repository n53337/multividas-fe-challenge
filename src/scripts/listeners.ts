import {
  handleBlurChange,
  handleBrightnessChange,
  handleContrastChange,
  handleGrayscaleChange,
  handleImageUpload,
  handleSepiaChange,
  resetFilters,
} from "./actions";
import {
  blurInput,
  brightnessInput,
  contrastInput,
  grayscaleInput,
  imageInput,
  resetBtn,
  sepiaInput,
} from "./providers";

export const initApp = () => {
  // Image Setter
  imageInput?.addEventListener("change", () => {
    const image = imageInput!.files![0];
    handleImageUpload(image);
  });

  // Filter Setters

  grayscaleInput!.addEventListener("input", () => {
    handleGrayscaleChange();
  });

  sepiaInput!.addEventListener("input", () => {
    handleSepiaChange();
  });

  blurInput!.addEventListener("input", () => {
    handleBlurChange();
  });

  brightnessInput!.addEventListener("input", () => {
    handleBrightnessChange();
  });

  contrastInput!.addEventListener("input", () => {
    handleContrastChange();
  });

  // Actions

  resetBtn!.addEventListener("click", () => {
    resetFilters();
  });
};
