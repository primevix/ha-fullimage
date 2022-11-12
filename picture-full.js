class ImageFull extends HTMLElement {

  set hass(hass) {    
    
    const card = this.config;
    const image = card.image;
    
    //novo
    if (!card.full-image) card.full-image = true;
      
    if (!this.content) {
      this.innerHTML = `<ha-card style="overflow: hidden; height: 100%;"></ha-card>`;
      this.content = this.querySelector('ha-card');
    }
    
    this.content.innerHTML = `      
      <img style="display: block; width: 100%;" src="http://homeassistant.local:8123/${image}">
    `;
    
    //height: 100%; object-fit: cover;
    if (card.full-image) {
      this.cardImage = this.querySelector('img');
      this.cardImage.style.height = '100%'
      this.cardImage.style.object-fit = 'cover'
    }    
    
  }

  setConfig(config) {
    if (!config.image) {
      throw new Error('You need to define an image');
    }   
    this.config = config;   
  }

  getCardSize() {
    return 3;
  }
}

customElements.define('image-full', ImageFull);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'image-full',
  name: 'Image Full',
  preview: false,
  description: 'A simple card to display a full image.'
});
