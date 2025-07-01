
//select all events
const btns=document.querySelectorAll(".btn");
const body=document.body;         //shorter for document.querySelector("body") //the body is provided with a new class each time to update the background color
//add click event listener to each event
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
color=btn.value;
changeBackground(color);
    });
});
//function to change the backgroud color
function changeBackground(color){
    //remove the existing color classes
    body.className="";                         
    //add the new class based on the clicked event
    switch(color){
        case "purple":
            body.classList.add('purple');
            break;
            case "blue":
                body.classList.add("blue");
                break;
                case "red":
                    body.classList.add("red");
                    break;
                    case "green":
                        body.classList.add("green");
                        break;
                        case "yellow":
                            body.classList.add("yellow");
                            break;
                            case "teal":
                                body.classList.add("teal");
                                break;
                                case "chocolate":
                                    body.classList.add("chocolate");
                                    break;
                                    default:
                                     break;
    }
}