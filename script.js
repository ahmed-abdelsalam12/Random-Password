const btnel = document.querySelector(".btn");

const inputel = document.getElementById("input");

const CopyIcon = document.querySelector(".fa-copy");

CopyIcon.addEventListener("click", () => {
  copypassword()
});

function copypassword(){
inputel.select();
inputel.setSelectionRange(0, 9999);
navigator.clipboard.writeText(inputel.value);

}









btnel.addEventListener("click", () => {
  creatpassword();
});

function creatpassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordlength = 14;
  let password = "";
  for (let x = 0; x < passwordlength; x++) {
    const randomnum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomnum, randomnum + 1);

    
  }
  inputel.value = password;
}
