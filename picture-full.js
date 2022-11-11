class ImageFull extends HTMLElement {

  set hass(hass) {    
    
    const image = config.image;
    //<img style="display: block; width: 100%; height: 100%; object-fit: cover;" src="http://homeassistant.local:8123/${image}">
    
    if (!this.content) {
      this.innerHTML = `
        <ha-card>
        </ha-card>
      `;
      this.content = this.querySelector('ha-card');
    }
    
    this.content.innerHTML = `      
      <img style="display: block; width: 100%; height: 100%; object-fit: cover;" src="http://homeassistant.local:8123/local/apa.jpg">
    `;
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
