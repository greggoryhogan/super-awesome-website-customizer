//Remove dash in routing number during pop state so it's easier to copy into banking programs
window.addEventListener('popstate', function (event) {
    //TD Loads details via fetch so we wait 1 second for the content to load
    setTimeout(function() {
        var text = 'Routing number';
        for (const div of document.querySelectorAll('span')) {
            if (div.textContent.includes(text)) {
                var routing = div.parentElement.parentElement.getElementsByTagName('td')[1].getElementsByTagName('span')[0];
                routing.innerHTML = routing.textContent.replace('-','');
            }
        }
    },1000);
});