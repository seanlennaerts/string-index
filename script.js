const textInput = document.querySelector('#text-input');
const tableRoot = document.querySelector('#table-root');

function buildTable(str) {
  const table = document.createElement('table');
  const tr1 = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = document.createElement('tr');
  for (let i = 0; i < str.length; i++) {
    const td1 = document.createElement('td');
    td1.innerText = i;
    tr1.appendChild(td1);
    const td2 = document.createElement('td');
    td2.innerText = str[i];
    tr2.appendChild(td2);
  }
  for (const word of str.split(/\s|\n/)) {
    const td = document.createElement('td')
    td.innerText = word;
    td.colSpan = word.length + 1;
    tr3.appendChild(td)
  }
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  tableRoot.replaceChild(table, tableRoot.childNodes[0]);
}

textInput.addEventListener('input', function() {
  buildTable(textInput.value)
});