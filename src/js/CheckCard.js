import luhnAlgorithm from './algorithm';

export default class CheckCard {
  constructor(cardsForm) {
    this.cardsForm = cardsForm;
    this.incorrect = cardsForm.querySelector('.incorrect');
    this.correct = cardsForm.querySelector('.correct');
    this.button = cardsForm.querySelector('.submit');
    this.input = cardsForm.querySelector('.input');
    this.mir = cardsForm.querySelector('.mir');
    this.mastercard = cardsForm.querySelector('.mastercard');
    this.visa = cardsForm.querySelector('.visa');
  }

  init() {
    this.input.addEventListener('input', () => {
      this.numberCard = this.input.value;
      this.fill(this.numberCard[0]);
    });
    this.button.addEventListener('click', () => {
      event.preventDefault();
      this.check(this.numberCard);
    });
  }

  check(numberCard) {
    if (!luhnAlgorithm(numberCard)) {
      this.incorrect.style.display = 'block';
      this.correct.style.display = 'none';
    } else {
      this.correct.style.display = 'block';
      this.incorrect.style.display = 'none';
    }
  }

  fill(numberCard) {
    numberCard === '2' ? this.mir.style.filter = 'none' : 0;
    numberCard === '4' ? this.visa.style.filter = 'none' : 0;
    numberCard === '5' ? this.mastercard.style.filter = 'none' : 0;
    if (numberCard == null) {
      this.mastercard.style.filter = 'grayscale(100%)';
      this.visa.style.filter = 'grayscale(100%)';
      this.mir.style.filter = 'grayscale(100%)';
      this.incorrect.style.display = 'none';
      this.correct.style.display = 'none';
    }
  }
}
