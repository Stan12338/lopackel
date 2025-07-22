//if you're seeing this, please ignore my trash code


const input = document.getElementById('myInput');
      input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        document.querySelectorAll('.filterDiv').forEach(tile => {
          const text = tile.innerText.toLowerCase().trim();
          tile.style.display = text.includes(query) ? '' : 'none';
        });
      });

var root = document.querySelector(':root');
