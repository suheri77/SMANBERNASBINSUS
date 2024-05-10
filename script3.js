
function showMore() {
    document.getElementById('hidden-rows').style.display = 'table-row';
    document.getElementById('show-more-btn').style.display = 'none';
    document.getElementById('show-less-btn').style.display = 'block';
}

function showLess() {
    document.getElementById('hidden-rows').style.display = 'none';
    document.getElementById('show-more-btn').style.display = 'block';
    document.getElementById('show-less-btn').style.display = 'none';
}


// Check if authentication token exists in localStorage
const isAuthenticated = localStorage.getItem('authenticated');
if (isAuthenticated) {
    document.getElementById('hidden-rows').style.display = 'table-row';
    document.getElementById('show-more-btn').classList.add('expanded');
    document.getElementById('show-more-btn').style.display = 'none';
    document.getElementById('show-less-btn').style.display = 'block';
}

function showMore() {
    document.getElementById('hidden-rows').style.display = 'table-row';
    document.getElementById('show-more-btn').classList.add('expanded');
    document.getElementById('show-more-btn').style.display = 'none';
    document.getElementById('show-less-btn').style.display = 'block';
    // Store authentication token in localStorage
    localStorage.setItem('authenticated', true);
}

function showLess() {
    document.getElementById('hidden-rows').style.display = 'none';
    document.getElementById('show-more-btn').classList.remove('expanded');
    document.getElementById('show-more-btn').style.display = 'block';
    document.getElementById('show-less-btn').style.display = 'none';
    // Remove authentication token from localStorage
    localStorage.removeItem('authenticated');
}