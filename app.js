let select = document.querySelector("select");
        let range = document.querySelector(".number");
        let span = document.querySelector(".out");
        let img = document.querySelector(".img-filter");
        let filter = "";
        let btn = document.querySelector("button");
        let opt = "";
        range.value = 0;
         
        select.onchange = function() {
            for(let i = 0; i < this.options.length; i++){
                if(this.options[i].selected) {
                    //console.log(this.options[i].value);
                    opt = this.options[i].value;
                }
            }
        }
        range.onchange = function() {
            if(opt === "brightness" || opt === "contrast") span.innerText = range.value * 2 + "%";
            
            if(opt == "saturate" ) span.innerText = range.value /10;
            
            if(opt == "hue-rotate" ) span.innerText = range.value * 3.6 + "deg";

            if(opt == "blur" || opt == "grayscale" || opt == "invert" || opt == "sepia" || opt == "opacity") span.innerText = range.value + "%";

            if(opt == "drop-shadow" ) span.innerText = range.value + "px";
        }
        btn.onclick = function() {
            /* console.log(range.value);
            console.log(opt); */
            if(opt == "blur") img.style.filter = `${opt}(${range.value}px)`;
                        
            if(opt == "brightness") img.style.filter = `${opt}(${range.value*2}%)`;
            if(opt == "contrast") img.style.filter = `${opt}(${range.value*2}%)`;
            
            if(opt == "grayscale") img.style.filter = `${opt}(${range.value}%)`;

            if(opt == "hue-rotate") img.style.filter = `${opt}(${range.value*3.6}deg)`;

            if(opt == "invert") img.style.filter = `${opt}(${range.value}%)`;

            if(opt == "opacity") img.style.filter = `${opt}(${range.value}%)`;

            if(opt == "saturate") img.style.filter = `${opt}(${range.value/10})`;

            if(opt == "sepia") img.style.filter = `${opt}(${range.value}%)`;

            if(opt == "drop-shadow") img.style.filter = `${opt}(${range.value}px ${range.value}px ${range.value}px silver)`;
        }