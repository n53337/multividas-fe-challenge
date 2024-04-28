import {
  blurInput,
  blurValue,
  brightnessInput,
  brightnessValue,
  contrastInput,
  contrastValue,
  dropzone,
  grayscaleInput,
  grayscaleValue,
  sepiaInput,
  sepiaValue,
} from "./providers";

export const handleImageUpload = (image: File) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    dropzone!.style.backgroundImage = `url('${e.target?.result?.toString()!}')`;
    dropzone!.classList.remove("dropzone-empty");
  };

  reader.readAsDataURL(image);
};

const setFilters = () => {
  dropzone!.style.filter = `grayscale(${grayscaleInput?.value}%) sepia(${sepiaInput?.value}%) blur(${blurInput?.value}px) brightness(${brightnessInput?.value}%) contrast(${contrastInput?.value}%)`;
};

export const handleGrayscaleChange = () => {
  setFilters();
  grayscaleValue!.textContent = grayscaleInput?.value ?? "0";
};

export const handleSepiaChange = () => {
  setFilters();
  sepiaValue!.textContent = sepiaInput?.value ?? "0";
};

export const handleBlurChange = () => {
  setFilters();
  blurValue!.textContent = blurInput?.value ?? "0";
};

export const handleBrightnessChange = () => {
  setFilters();
  brightnessValue!.textContent = brightnessInput?.value ?? "0";
};

export const handleContrastChange = () => {
  setFilters();
  contrastValue!.textContent = contrastInput?.value ?? "0";
};
