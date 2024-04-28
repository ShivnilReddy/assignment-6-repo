document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
  
    const textarea = document.createElement('textarea');
    textarea.id = 'text-input';
    textarea.placeholder = 'Enter text here...';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.onclick = processText;

    root.appendChild(textarea);
    root.appendChild(submitButton);

    function processText() {
        const text = textarea.value.trim();
        const words = text.split(/\s+/);
        const frequency = {};

        words.forEach(word => {
            if (word) {
                frequency[word] = (frequency[word] || 0) + 1;
            }
        });
      
        const sortedWords = Object.keys(frequency).sort((a, b) => {
            if (frequency[b] === frequency[a]) {
                return a.localeCompare(b);
            }
            return frequency[b] - frequency[a];
        });

        const table = document.createElement('table');
        const headerRow = table.insertRow();
        const headerWord = headerRow.insertCell();
        const headerFreq = headerRow.insertCell();
        headerWord.textContent = 'Word';
        headerFreq.textContent = 'Frequency';

        sortedWords.slice(0, 5).forEach(word => {
            const row = table.insertRow();
            const cellWord = row.insertCell();
            const cellFreq = row.insertCell();
            cellWord.textContent = word;
            cellFreq.textContent = frequency[word];
        });

        if (root.lastChild.tagName === 'TABLE') {
            root.replaceChild(table, root.lastChild);
        } else {
            root.appendChild(table);
        }
      
        console.log(frequency);
    }
});
