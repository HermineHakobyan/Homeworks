// Ողջույն, առաջին խնդիրըHTMLում ստեղծեք մի հատ DIV , էդ դիվը ստացեք JS-ում, ու էնպես արեք, որ երբ որ սեղմեք 
// A տառի վրա դիվը գնա ՁԱԽ, եթե սեղմեք D տառի վրա, ապա DIV-ը գնա ԱՋ, սեղմեք S տառի վրա DI-ը իջնի ներքև, 
// իսկ եթե սեղմեք W տառի վրա DIV-ը բարձրանա վերև, պետք ա հստակ քայլ առ քայլ գնա առանց ա կետից բ կետ թռնելու
// Հուշում
// Պետք է աշխատեք EVENT-ի հետ

function moveMdiv(str){
    let step =1;
    switch(str){
        case "a":
            let x =document.getElementById('mdiv').offsetTop;
            x = x+step;
            document.getElementById('mdiv').style.top=x+"px";
            break;
            case "d":
                let x=document.getElementById('mdiv').offsetLeft;
        x=x+step;
            document.getElementById('mdiv').style.left=x+"px";
            break;
            case "t":
           let y= document.getElementById('mdiv').offsetTop;
           y=y-step;
           document.getElementById('mdiv').style.top=y-"px";
           break;
           case "w":
            let y =document.getElementById('mdiv').offsetTop;
            y=y+step;
            document.getElementById('mdiv').style.top=y+"px";
            break;
    }
}