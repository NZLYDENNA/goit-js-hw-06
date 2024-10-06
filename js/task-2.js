class Storage {
  // Prywatna właściwość items
  #items;

  constructor(initialItems) {
    // Inicjalizacja prywatnej właściwości items
    this.#items = initialItems;
  }

  // Metoda zwracająca bieżące towary
  getItems() {
    return this.#items;
  }

  // Metoda dodająca nowy towar
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Metoda usuwająca towar
  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

//const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//console.log(storage.getItems());
//storage.addItem("Droid");
//console.log(storage.getItems());
//storage.removeItem("Prolonger");
//console.log(storage.getItems());
