
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     
     _______.    __  ___    ____    ____    .__   __.     _______    .___________.
    /       |   |  |/  /    \   \  /   /    |  \ |  |    |   ____|   |           |
   |   (----`   |  '  /      \   \/   /     |   \|  |    |  |__      `---|  |----`
    \   \       |    <        \_    _/      |  . `  |    |   __|         |  |     
.----)   |      |  .  \         |  |        |  |\   |    |  |____        |  |     
|_______/       |__|\__\        |__|        |__| \__|    |_______|       |__|     
                                                                                  
                                                                                                                        
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
