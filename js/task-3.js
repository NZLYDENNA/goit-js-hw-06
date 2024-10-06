class StringBuilder {
  // Prywatna właściwość value
  #value;

  constructor(initialValue) {
    // Inicjalizacja prywatnej właściwości value
    this.#value = initialValue;
  }

  // Metoda zwracająca bieżącą wartość
  getValue() {
    return this.#value;
  }

  // Metoda dodająca ciąg na końcu
  padEnd(str) {
    this.#value += str;
  }

  // Metoda dodająca ciąg na początku
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Metoda dodająca ciąg na początku i końcu
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

//const builder = new StringBuilder(".");
//console.log(builder.getValue());
//builder.padStart("^");
//console.log(builder.getValue());
//builder.padEnd("^");
//console.log(builder.getValue());
//builder.padBoth("=");
//console.log(builder.getValue());
