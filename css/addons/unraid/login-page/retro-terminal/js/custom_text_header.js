
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     
  ____  _  ____   ___   _ _____ _____ 
 / ___|| |/ /\ \ / / \ | | ____|_   _|
 \___ \| ' /  \ V /|  \| |  _|   | |  
  ___) | . \   | | | |\  | |___  | |  
 |____/|_|\_\  |_| |_| \_|_____| |_|  
                                                                            
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
