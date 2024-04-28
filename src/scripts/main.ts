console.log("Hello Multividas!", "👋");

import { dropzone, imageInput } from "./providers";

// Handle Image Upload
imageInput?.addEventListener("change", () => {
  const image = imageInput!.files![0];

  const reader = new FileReader();

  reader.onload = function (e) {
    dropzone!.style.backgroundImage = `url('${e.target?.result?.toString()!}')`;
    dropzone!.classList.remove("dropzone-empty");
  };

  reader.readAsDataURL(image);
});
