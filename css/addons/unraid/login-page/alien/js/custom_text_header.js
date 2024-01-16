
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     
   _____   _   __ __   __  _   _   _____   _____ 
  /  ___| | | / / \ \ / / | \ | | |  ___| |_   _|
  \ `--.  | |/ /   \ V /  |  \| | | |__     | |  
   `--. \ |    \    \ /   | . ` | |  __|    | |  
  /\__/ / | |\  \   | |   | |\  | | |___    | |  
  \____/  \_| \_/   \_/   \_| \_/ \____/    \_/  
                                                                                  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
