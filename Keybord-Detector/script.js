const addValue = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  addValue.innerHTML = `
    <div class='color'style="height:120px;">
    <table>
    <tr style="width:20px;">
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});