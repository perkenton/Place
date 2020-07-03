'use strict';

class CardList {

  constructor(container, places, createCard) {
    this.container = container;
    this.places = places;
    this.createCard = createCard;
  }

  addCard = (placeName, placeLink) => {
    const card = this.createCard(placeName, placeLink);
    this.container.appendChild(card);
  }

  render = () => {
    this.places.forEach(place => {
      this.addCard(place.name, place.link);
    });
  }

}
