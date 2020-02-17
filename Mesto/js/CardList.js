class CardList {
    constructor(container, arr, card) {
        console.log(card);
        this.container = container;
        this.arr = arr;
        this.card = card;
        this.container.addEventListener('click', this.eventHandler);
    }

    eventHandler(event){
      // если лайк
      Card.like(event);
      //если удаление
      Card.remove(event);
    }

    addCard(name, link) {
        const place = Card.create(name, link);
        this.container.append(place);
    }

    render() {
        for (let {name, link} of this.arr) {
            this.addCard(name, link);
        }
    }
};

