// Wrapper Body Elemennt
export const wrapperBody =
  document.querySelector<HTMLDivElement>(".wrapper__body");

// Dropzone Element
export const dropzone =
  document.querySelector<HTMLDivElement>(".wrapper__dropzone");

// Image Input Element
export const imageInput = document.querySelector<HTMLInputElement>("#image");

// Modifier Inputs
export const grayscaleInput =
  document.querySelector<HTMLInputElement>("#grayscale");
export const sepiaInput = document.querySelector<HTMLInputElement>("#sepia");
const blurInput = document.querySelector<HTMLInputElement>("#blur");
export const brightnessInput =
  document.querySelector<HTMLInputElement>("#brightness");
export const contrastInput =
  document.querySelector<HTMLInputElement>("#contrast");

// Modifier Values
export let grayscaleValue = grayscaleInput?.value;
export let sepiaValue = sepiaInput?.value;
export let blurValue = blurInput?.value;
export let brightnessValue = brightnessInput?.value;
export let contrastValue = contrastInput?.value;
