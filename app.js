// ============================================================
// QR Code Generator Application - Main Logic
// ============================================================

// ============================================================
// DOM Element References
// ============================================================
const input = document.getElementById("inputField");
const qrContainer = document.getElementById("qrcode");
const inputContainer = document.getElementById("before");
const componentContainer = document.getElementById("after");

const btn = document.getElementById("btn");
const download = document.getElementById("download");
const share = document.getElementById("share");

// ============================================================
// QR Code Instance
// ============================================================
let qrCode;

// ============================================================
// Event Listeners
// ============================================================

// Generate QR Code on button click
btn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a valid URL.");
    componentContainer.style.display = "none";
    inputContainer.style.display = 'flex'
  } else {
    componentContainer.style.display = "flex";
    inputContainer.style.display = 'none'

    qrContainer.innerHTML = "";

    qrCode = new QRCode(qrContainer, {
      text: text,
      width: 250,
      height: 250,
    });
  }
});

// Download QR Code as image
download.addEventListener("click", () => {
  const img = qrContainer.querySelector("img");
  if (!img) return;

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "qrcode.png";
  link.click();
});

// Copy QR Code input to clipboard
share.addEventListener('click', async () =>{
  try{
    await navigator.clipboard.writeText(input.value)
  }catch(err){
    console.log(err)
  }
})


