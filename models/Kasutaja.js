export class Kasutaja {
  constructor(id = null, kasutajanimi = null, parool = null, eesnimi = null, perenimi = null) {
    this._id = id;
    this._kasutajanimi = kasutajanimi;
    this._parool = parool;
    this._eesnimi = eesnimi;
    this._perenimi = perenimi;
  }

  // getters
  getId() {
    return this._id;
  }

  getKasutajanimi() {
    return this._kasutajanimi;
  }

  getParool() {
    return this._parool;
  }

  getEesnimi() {
    return this._eesnimi;
  }

  getPerenimi() {
    return this._perenimi;
  }

  // setters
  setId(id) {
    this._id = id;
  }

  setKasutajanimi(kasutajanimi) {
    this._kasutajanimi = kasutajanimi;
  }

  setParool(parool) {
    this._parool = parool;
  }

  setEesnimi(eesnimi) {
    this._eesnimi = eesnimi;
  }

  setPerenimi(perenimi) {
    this._perenimi = perenimi;
  }
}