const pwd = document.getElementById("pwd-txt");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
let pwd_length = document.getElementById("slider");
let copy_text = document.getElementById("copy-text");
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";



if (pwd.textContent === 'Click on Generate Button') {
  clipboard.disabled = true;
}

generate.addEventListener("click", () => {
  clipboard.disabled=false;
  let password = "";
  let checked_special = document.getElementById("checkbox-special-character").checked;
  let checked_number=document.getElementById("checkbox-number").checked
  let final_string = string;
  if (checked_special) {
    final_string += "!@£$%^&*()_-=+[]{};:'|,.?/<>~`";
  }else if(checked_number){
    final_string+="0123456789";
  }else if(checked_number && checked_special){
    final_string+="0123456789!@£$%^&*()_-=+[]{};:'|,.?/<>~`"
  }
  for (let i = 0; i < pwd_length.value; i++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  pwd.innerText = password;
  final_string = string;
});

clipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(pwd.innerText);
  copy_text.textContent = "Password Copied!";
  copy_text.style.display = "block";
  setTimeout(() => {
    copy_text.style.display = "none";
  }, 2000);
});
$(document).ready(function() {
    $('#copy-text').on('input', function() {
      if ($('#inputField').val() !== '') {
        $('#submitButton').prop('disabled', false);
      } else {
        $('#submitButton').prop('disabled', true);
      }
    });
  });