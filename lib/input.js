const mask = '+7(985)0II-XX-**';

window.customElements.define('num-input-wc', 
    class NumInput extends HTMLElement {
        constructor(){
            super();
            const root = this.attachShadow({mode: 'open'});
            console.log(mask);
            const style = document.createElement('style');
            style.innerHTML = `
                input[type=text] {
                    width: 4%;
                    padding: 12px 12px;
                    box-sizing: border-box;
                }

                input[type=text]:focus:enabled:not(:hover) {
                    border: 3px solid #555;
                    !important;
                }

                input[type=text]:hover:enabled:not(:focus) {
                    background-color: #3CBC8D;
                }
            `;
            root.appendChild(style);
            const form = document.createElement('form');
            root.appendChild(form);
            
            for (let chr of mask) {
                if(!isNaN(chr) || chr == "I" || chr == "X" || chr == "*") {
                    let input = document.createElement('input');
                    if (chr !== "I") {
                        if (chr == "*") chr = "●";
                        input.value = chr;
                        input.setAttribute("disabled", "true");
                    } else {
                        input.addEventListener("keypress", function (evt) {
                            if (evt.which < 48 || evt.which > 57)
                            {
                                evt.preventDefault();
                            }
                        });
                    }
                    input.setAttribute("type", "text");
                    input.setAttribute("pattern", "\d [0-9]");
                    input.setAttribute("maxlength", "1");
                    form.appendChild(input);
                } else if (chr == "+" || chr == "(" || chr == ")") {
                    let label = document.createElement('label');
                    label.innerHTML = chr;
                    form.appendChild(label);
                }
            }
        }
});