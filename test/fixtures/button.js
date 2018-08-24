exports.button = textContent => ({
  classList: {
    add() {}
  },
  textContent,
  parentNode: {
    children: [{
      classList: {
        remove() {}
      }
    }]
  }
});
