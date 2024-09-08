function clickItem(node) {
  node.classList.add('active');
  for (const program of document.getElementsByClassName('program')) {
    if(program.id !== node.id) {
      program.classList.remove('active');
    }
  }
}