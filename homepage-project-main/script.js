const projectsElement = document.getElementsByClassName("projects")[0];

for (let index = 0; index < 5; index++) {
  const projectNode = document.getElementsByClassName("project")[0];
  const clone = projectNode.cloneNode(true);

  projectsElement.appendChild(clone);
}
