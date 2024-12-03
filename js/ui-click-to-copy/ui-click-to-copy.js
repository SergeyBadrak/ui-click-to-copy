/* Copy text content to clipboard

Button data-atributes structure:
<a 
    data-cp-button="" data-cp-target="#result" 
    COPY
</a>  */


let buttons = document.querySelectorAll('[data-cp-button]');

if (buttons != null) {

    for (let button of buttons) {

        button.addEventListener('click', function(event) {
    
            let target = document.querySelector(button.dataset.cpTarget);
            let targetType = target.nodeName;

            // if input or textarea DOM element
            if (targetType == 'TEXTAREA' || targetType == 'INPUT') {
                // Select the text field
                target.select();
                // For mobile devices
                target.setSelectionRange(0, 99999);
                // Copy the text content
                navigator.clipboard.writeText(target.value);
                // alert("Copied the text: " + target.value);
            }
            
            // any other DOM element
            else {
                navigator.clipboard.writeText(target.innerHTML);
                // alert("Copied the text: " + target.innerHTML);
            }

        
        })
    
    }

}



