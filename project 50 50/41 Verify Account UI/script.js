const codes = document.querySelectorAll(".number-code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10);
    }
  });
  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      codes[idx - 1].focus();
      codes[idx - 1].value = "";
    }
  });
});
