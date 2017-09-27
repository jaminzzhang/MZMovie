
export class Action {
  constructor(type, playload) {
    this.type = type;
    this.playload = playload;
  }
}


const ActionTypes = {
  HOME_PAGE: 'HOME_PAGE',
  EXPLORE_PAGE: 'EXPLORE_PAGE'
}

module.exports = ActionTypes ;
