function addingEventListener() {
    const button = document.getElementById("button"); 
    
    if (button) {  
        button.addEventListener("click", () => {
            console.log("Button clicked!");
        });
    }
}

addingEventListener(); 
