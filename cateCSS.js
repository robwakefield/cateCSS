 const bgColor = "#282a36";
 const fgColor = "#44475a";
 const highlightColor = "#ff5555";
 const green = "#50fa7b";
 const pink = "#ff79c6";
 const cyan = "#8be9fd";
 const blue_text = "#bd93f9";
 const red_text = "#ff5555";
 
 console.log("URL matched");

 document.body.style.backgroundColor = bgColor;
 document.body.style.color = "#f8f8f2";

 tbls = document.getElementsByTagName('table');
 
 for (let i = 0; i < tbls.length; i++) {
   const tbl = tbls[i];
   tbl.bgColor = bgColor;
 }

 ths = document.getElementsByTagName('th');
 for (let i = 0; i < ths.length; i++) {
  const th = ths[i];
  switch (th.bgColor) {
    case "white":
      th.bgColor = fgColor;      
      break;
    case "LightSkyBlue":
      th.bgColor = highlightColor;
      break;
    default:
      if (th.textContent.trim() != "") {
        th.bgColor = fgColor;
      }
      break;
  }
 }

 tds = document.getElementsByTagName('td');
 
 for (let i = 0; i < tds.length; i++) {
   const td = tds[i];
  aas = td.getElementsByTagName('a');

  for (let i = 0; i < aas.length; i++) {
      const a = aas[i];
      a.style.color = "white";
  }

  if (!td.textContent.includes("Subscribed")) {
    td.align = "center";
  } else {
    td.textContent = td.textContent.replace("\n", " ");
    td.align = "right";
  }

   switch (td.bgColor) {
      case "white":
        td.bgColor = fgColor;
        td.style = "";
        break;
      case "#e0f9f9":
        td.bgColor = bgColor;
        break;
      case "#dddddd":
        // date highlight
        td.bgColor = fgColor;  
        break;
      case "#ccffcc":
        // CW
        td.bgColor = green;
        border = td.style.border;
        td.style = "border: " + border.replace("red", red_text) + ";color:" + bgColor;
        aas = td.getElementsByTagName('a');

        for (let i = 0; i < aas.length; i++) {
           const a = aas[i];
           a.style.color = bgColor;
        }
        break;
      case "#cdcdcd":
        // unassessed
        td.bgColor = cyan;
        border = td.style.border;
        td.style = "border: " + border.replace("red", red_text) + ";color:" + bgColor;
        aas = td.getElementsByTagName('a');

        for (let i = 0; i < aas.length; i++) {
           const a = aas[i];
           a.style.color = bgColor;
        }
        break;
      case "#8ef9f9":
        td.bgColor = bgColor;
        break;
      case "LightSkyBlue":
        td.bgColor = highlightColor;
        break;
     default:
        td.bgColor = bgColor;
        break;
   }
 }

 fonts = document.getElementsByTagName('font');

 for (let i = 0; i < fonts.length; i++) {
   const font = fonts[i];
   switch (font.color) {
    case "blue":
      font.color = "#f8f8f2";
      break;
    case "red":
      font.color = red_text;
      break;
    case "blue":
      font.color = blue_text;
      break;
   
     default:
       break;
   }
 }

 function changeFont(element){
  element.setAttribute("style",element.getAttribute("style")+";font-family: Helvetica");
  for(var i=0; i < element.children.length; i++){
      changeFont(element.children[i]);
  }
}
changeFont(document.getElementsByTagName("body")[0]);