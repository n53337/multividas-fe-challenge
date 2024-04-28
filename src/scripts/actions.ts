import { dropzone, grayscaleInput, grayscaleValue } from "./providers";

export const handleImageUpload = (image: File) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    dropzone!.style.backgroundImage = `url('${e.target?.result?.toString()!}')`;
    dropzone!.classList.remove("dropzone-empty");
  };

  reader.readAsDataURL(image);
};

export const handleGrayscaleChange = () => {
  dropzone!.style.filter = `grayscale(${grayscaleInput?.value}%)`;
  grayscaleValue!.textContent = grayscaleInput?.value ?? "0";
};
