class HeaderComponent {
  get searchIcon() {
    return $('[jsname="Ohx1pb"]');
  }

  get searchBar() {
    return $('input[placeholder="Search"]');
  }
}

module.exports = HeaderComponent;
