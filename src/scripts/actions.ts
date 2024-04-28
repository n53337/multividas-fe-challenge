import { dropzone } from "./providers";

export const handleImageUpload = (image: File) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    dropzone!.style.backgroundImage = `url('${e.target?.result?.toString()!}')`;
    dropzone!.classList.remove("dropzone-empty");
  };

  reader.readAsDataURL(image);
};
