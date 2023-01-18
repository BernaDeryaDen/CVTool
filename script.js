function nameFunction() {
  document.getElementById("cvNameTitle").innerHTML = document
    .getElementById("nameBoxNameInput")
    .value.toUpperCase();
}
function jobFunction() {
  document.getElementById("cvJobTitle").innerHTML = document
    .getElementById("nameBoxJobInput")
    .value.toUpperCase();
}

function phoneFunction() {
  document.getElementById("phoneOutput").innerHTML = document.getElementById(
    "contactBoxPhoneInput"
  ).value;
}
function emailFunction() {
  document.getElementById("mailOutput").innerHTML = document.getElementById(
    "contactBoxEmailInput"
  ).value;
}
function adressFunction() {
  document.getElementById("adressOutput").innerHTML = document.getElementById(
    "contactBoxAdressInput"
  ).value;
}
function webFunction() {
  document.getElementById("webOutput").innerHTML =
    document.getElementById("contactBoxWebInput").value;
}
function educationExpFunction() {
  document.getElementById("cvEducationInput").innerHTML =
    document.getElementById("educationBoxTextInput").value;
}

function schoolFunction() {
  let schoolNumber = document.getElementById("educationBoxSelect").value;
  for (let i = 0; i < schoolNumber; i++) {
    document.getElementById("selectBoxSelect").innerHTML += `<br><label>${
      i + 1
    }. Okul</label><input type="text" id="school${i}" placeholder="Okul Adı"  style="margin-top: 0px;" onchange="cvSchoolFunction(${i}); this.onchange=null"><input type="text" id="school${i}Exp" placeholder="Açıklama"  style="margin-top: 0px;" onchange="cvSchoolExpFunction(${i}); this.onchange=null">`;
  }
}
function cvSchoolFunction(e) {
  let schoolNumber = e;
  console.log(schoolNumber);
  val = document.getElementById(`school${schoolNumber}`).value;

  document.getElementById("cvSchoolListInput").innerHTML += `<li>${val}</li>`;
}
function cvSchoolExpFunction(e) {
  let schoolNumber = e;
  console.log(schoolNumber);
  valExp = document.getElementById(`school${schoolNumber}Exp`).value;
  document.getElementById(
    "cvSchoolListInput"
  ).innerHTML += `<ul><li>${valExp}</li></ul>`;
}
function skillExpFunction() {
  document.getElementById("cvSkillInput").innerHTML =
    document.getElementById("skillBoxTextInput").value;
}

function skillFunction() {
  let skillNumber = document.getElementById("skillBoxSelect").value;
  for (let i = 0; i < skillNumber; i++) {
    document.getElementById("selectSkillBoxSelect").innerHTML += `<br><label>${
      i + 1
    }. Yetenek</label><input type="text" id="skill${i}" placeholder="Yetenek"  style="margin-top: 0px;" onchange="cvSkillFunction(${i}); this.onchange=null"><input type="text" id="skill${i}Exp" placeholder="Açıklama"  style="margin-top: 0px;" onchange="cvSkillExpFunction(${i}); this.onchange=null">`;
  }
}
function cvSkillFunction(e) {
  let skillNumber = e;
  console.log(skillNumber);
  val = document.getElementById(`skill${skillNumber}`).value;

  document.getElementById("cvSkillListInput").innerHTML += `<li>${val}</li>`;
}
function cvSkillExpFunction(e) {
  let skillNumber = e;
  console.log(skillNumber);
  valExp = document.getElementById(`skill${skillNumber}Exp`).value;
  document.getElementById(
    "cvSkillListInput"
  ).innerHTML += `<ul><li>${valExp}</li></ul>`;
}
function aboutExpFunction() {
  document.getElementById("cvAboutInput").innerHTML =
    document.getElementById("aboutBoxTextInput").value;
}
function workExpFunction() {
  document.getElementById("cvExperienceInput").innerHTML =
    document.getElementById("workExpBoxTextInput").value;
}
function backColorFunction() {
  let backColor = document.getElementById("backColorBoxInput").value;
  document.getElementById("cvTool-3").style.backgroundColor = backColor;
}
function leftSideColorFunction() {
  let lefSideColor = document.getElementById("leftSideColorBoxInput").value;
  document.getElementById("leftsideColumn").style.backgroundColor =
    lefSideColor;
}
function nameColorFunction() {
  let nameColor = document.getElementById("nameColorBoxInput").value;
  document.getElementById("topSide").style.backgroundColor = nameColor;
}
function nameTextColorFunction() {
  let nameTextColor = document.getElementById("nameColorInput").value;
  document.getElementById("cvNameColor").style.color = nameTextColor;
  document.getElementById("cvJobColor").style.color = nameTextColor;
  document.getElementById("cvHrColor").style.borderColor = nameTextColor;
}
function photoBoxChangeFunction() {
  let photoBoxChange = document.getElementById("photoBoxSelect").value;

  switch (photoBoxChange) {
    case "1":
      document.getElementById("image-1").style.borderRadius = "50%";
      break;
    case "2":
      document.getElementById("image-1").style.borderRadius = "0%";
      break;
    case "3":
      document.getElementById("image-1").style.borderRadius = "10%";
      break;
  }
}
function underlineTypeChangeFunction() {
  let underlineChange = document.getElementById("underlineTypeSelect").value;
  console.log(underlineChange);
  switch (underlineChange) {
    case "1":
      document.getElementById("cvHr-1").style.borderStyle = "solid";
      document.getElementById("cvHr-2").style.borderStyle = "solid";
      document.getElementById("cvHr-3").style.borderStyle = "solid";
      document.getElementById("cvHr-4").style.borderStyle = "solid";
      document.getElementById("cvHr-5").style.borderStyle = "solid";

      break;
    case "2":
      document.getElementById("cvHr-1").style.borderStyle = "dashed";
      document.getElementById("cvHr-2").style.borderStyle = "dashed";
      document.getElementById("cvHr-3").style.borderStyle = "dashed";
      document.getElementById("cvHr-4").style.borderStyle = "dashed";
      document.getElementById("cvHr-5").style.borderStyle = "dashed";
      break;
    case "3":
      document.getElementById("cvHr-1").style.borderStyle = "dotted";
      document.getElementById("cvHr-2").style.borderStyle = "dotted";
      document.getElementById("cvHr-3").style.borderStyle = "dotted";
      document.getElementById("cvHr-4").style.borderStyle = "dotted";
      document.getElementById("cvHr-5").style.borderStyle = "dotted";
      break;
  }
}
function lineColorFunction() {
  let lineColor = document.getElementById("titleLineBoxInput").value;

  document.getElementById("cvHr-1").style.borderColor = lineColor;
  document.getElementById("cvHr-2").style.borderColor = lineColor;
  document.getElementById("cvHr-3").style.borderColor = lineColor;
  document.getElementById("cvHr-4").style.borderColor = lineColor;
  document.getElementById("cvHr-5").style.borderColor = lineColor;
}
function fontFunction() {
  let font = document.getElementById("fontBoxSelect").value;
  switch (font) {
    case "1":
      document.getElementById("cvTool-3").style.fontFamily = "Times New Roman";

      break;
    case "2":
      document.getElementById("cvTool-3").style.fontFamily = "Arial";
      break;
    case "3":
      document.getElementById("cvTool-3").style.fontFamily = "Courier New";
      break;
    case "4":
      document.getElementById("cvTool-3").style.fontFamily = "Georgia";
      break;
    case "5":
      document.getElementById("cvTool-3").style.fontFamily = "Verdana";
      break;
    case "6":
      document.getElementById("cvTool-3").style.fontFamily = "Gill Sans";
      break;
    case "7":
      document.getElementById("cvTool-3").style.fontFamily = "Segoe UI";
      break;
    case "8":
      document.getElementById("cvTool-3").style.fontFamily = "Lucida Sans";
      break;
    case "9":
      document.getElementById("cvTool-3").style.fontFamily = "Impact";
      break;
    case "10":
      document.getElementById("cvTool-3").style.fontFamily =
        "Franklin Gothic Medium";
      break;
  }
}
