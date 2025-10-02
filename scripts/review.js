let count = localStorage.getItem('reviewCount') || 0;
count = parseInt(count) + 1;
localStorage.setItem('reviewCount', count);

document.querySelector('#reviewCount').textContent = count + " reviews so far.";