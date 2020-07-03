'use strict';

class UserInfo {

  constructor(object) {
    this.profileNameInput = object.profileNameInput;
    this.profileAboutInput = object.profileAboutInput;
    this.userName = object.userName;
    this.userJob = object.userJob;
  }

  setUserInfo = (name, about) => {
    this._updateUserInfo(name, about);
  }

  _updateUserInfo = (name, about) => {
    this.userName.textContent = name;
    this.userJob.textContent = about;
  }
  
}
