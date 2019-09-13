export default class NumInput extends HTMLElement {

    set mask(val) {
        this.maskVal = val;
        this._parseMask(this.maskVal);
    }

    set error(val) {
        if (this.maskVal) {
            this.errorVal = val;
            const error_el = this._initError();
            this._addError(error_el);
        }
    }

    constructor(){
        super();

        this.inputCont = "";

        this.maskVal = "";
        this.errorVal = false;
    }

    connectedCallback() {
        this.root = this.attachShadow({mode: 'open'});

        const style = this._createFormStyle();
        this.root.appendChild(style);

        this.form = document.createElement('form');
        this.root.appendChild(this.form);
    }

    disconnectedCallback() {
        if (this.inputCont) this.inputCont.removeEventListener("keypress", this._allowJustNumbers(evt));
    }

    _initError() {
        let error_text = document.createElement('p');
        error_text.innerText = "Неверный номер, попробуйте еще раз"
        error_text.setAttribute("style", "display:none;");
        return error_text;
    }

    _createFormStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
            input[type=text] {
                width: 3em;
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
        return style;
    }

    _parseMask(mask) {
        for (let chr of mask) {
            if (chr == "*") chr = "●";
            if(!isNaN(chr) || chr == "I" || chr == "X" || chr == "●") {
                this.inputCont = this._addInput(chr)
                this.form.appendChild(this.inputCont);
            } else if (chr == "+" || chr == "(" || chr == ")" || chr == "-") {
                this.form.appendChild(this._addLabel(chr));
            }
        }
    }

    _addInput(chr) {
        let input = document.createElement('input');
        if (chr !== "I") {
            input.value = chr;
            input.setAttribute("disabled", "true");
        } else {
            input.addEventListener("keypress", this._allowJustNumbers);
        }
        input.setAttribute("type", "text");
        input.setAttribute("pattern", "\d [0-9]");
        input.setAttribute("maxlength", "1");
        input.setAttribute("tabindex", "0");
        return input;
    }

    _allowJustNumbers(evt) {
        if (evt.which < 48 || evt.which > 57)
        {
            evt.preventDefault();
        }
    }

    _addLabel(chr) {
        const label = document.createElement('label');
        label.innerText = chr;
        return label;
    }

    _addError(error_el) {
        if (this.errorVal) error_el.setAttribute("style", "display:block; color:red");
        this.form.appendChild(error_el);
    }
}

if (!customElements.get('num-input-wc')) {
    customElements.define('num-input-wc', NumInput);
}
