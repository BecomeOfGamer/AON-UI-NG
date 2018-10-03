declare let ue: any;

export default class UnrealAPI {
  constructor() {
    this.connect = this.connect.bind(this);
  }

  /**
   * Check UE library
   */
  private isValid() {
    let isvalid: Boolean = false;
    if (
      // typeof this.dispatch !== 'undefined' &&
      typeof ue === 'object' &&
      typeof ue.interface === 'object'
    ) {
      isvalid = typeof ue.interface.broadcast === 'function' ? true : false;
    }
    if (!isvalid) console.warn('You are not in unreal engine.');
    return isvalid;
  }

  /**
   * Connect to UE4
   * @param {Object} dispatch models
   */
  public connect(dispatch: any) {
    if (!this.isValid()) return;
    ue.interface.setCurrentHero = this.setCurrentHero.bind(this);
    ue.interface.lostFocusUnit = this.lostFocusUnit.bind(this);
    this.debug('Connect to Unreal API');
  }

  /**
   * Console Debug Message
   * @param {any} payload Message
   */
  private debug(payload: any) {
    if (!this.isValid()) return;
    if (typeof payload === 'undefined') return;
    this.emit('debug', payload);
  }

  /**
   * Event Emitter
   * @param {String} name Target element
   * @param {Object} data Payload
   */
  public emit(name: String, data: Object) {
    try {
      if (!this.isValid()) return;
      if (typeof data !== 'undefined') {
        ue.interface.broadcast(name, JSON.stringify(data));
      } else {
        ue.interface.broadcast(name, '');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Update hero information
   * @param {Object} val
   */
  private setCurrentHero(val: Object) {
    if (!this.isValid()) return;
    // this.dispatch({ type: 'status/setPanelVisible', payload: { show: true } });
    // this.dispatch({ type: 'player/update', payload: val });
    // this.debug('setCurrentHero')
  }

  /**
   * Emit event when lost focus
   */
  private lostFocusUnit() {
    if (!this.isValid()) return;
    // this.dispatch({ type: 'status/setPanelVisible', payload: { show: false } });
    // this.debug('lostFocusUnit')
  }

}
