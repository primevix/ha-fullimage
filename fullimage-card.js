class ContentCardExample extends HTMLElement {
  // Whenever the state changes, a new `hass` object is set. Use this to
  // update your content.
  set hass(hass) {
    // Initialize the content if it's not there yet.
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Example-card">
          <div class="card-content"></div>
        </ha-card>
      `;
      this.content = this.querySelector('div');
    }

    const entityId = this.config.entity;
    const state = hass.states[entityId];
    const stateStr = state ? state.state : 'unavailable';

    this.content.innerHTML = `
      The state of ${entityId} is ${stateStr}!
      <br><br>
      <img src="http://via.placeholder.com/350x150">
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = config;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define('content-card-example', ContentCardExample);
