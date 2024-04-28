// Wrapper Body Elemennt
export const wrapperBody =
  document.querySelector<HTMLDivElement>(".wrapper__body");

// Dropzone Element
export let dropzone =
  document.querySelector<HTMLDivElement>(".wrapper__dropzone");

// Image Input Element
export const imageInput = document.querySelector<HTMLInputElement>("#image");

// Modifier Inputs
export const grayscaleInput =
  document.querySelector<HTMLInputElement>("#grayscale");
export const sepiaInput = document.querySelector<HTMLInputElement>("#sepia");
export const blurInput = document.querySelector<HTMLInputElement>("#blur");
export const brightnessInput =
  document.querySelector<HTMLInputElement>("#brightness");
export const contrastInput =
  document.querySelector<HTMLInputElement>("#contrast");

// CTA Buttons
export const downloadBtn =
  document.querySelector<HTMLButtonElement>(".download__btn");
export const resetBtn =
  document.querySelector<HTMLButtonElement>(".reset__btn");

// Modifier Values
export let grayscaleValue =
  document.querySelector<HTMLSpanElement>(".grayscale__value");
export let sepiaValue =
  document.querySelector<HTMLSpanElement>(".sepia__value");
export let blurValue = document.querySelector<HTMLSpanElement>(".blur__value");
export let brightnessValue =
  document.querySelector<HTMLSpanElement>(".brightness__value");
export let contrastValue =
  document.querySelector<HTMLSpanElement>(".contrast__value");
