class NewsSearchView {
  _parentElement = document.querySelector('.search-form');

  getQuery() {
    const query = this._parentElement.querySelector('.search-field').value;
    this._clearInputFields();
    return query;
  }

  _clearInputFields() {
    this._parentElement.querySelector('.search-field').value = '';
  }

  submitHandler(controlHandler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      controlHandler();
    });
  }
}

export default new NewsSearchView();
