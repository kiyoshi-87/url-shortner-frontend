document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loader = document.getElementById('loader');
    console.log (loader)
    loader.style.display = 'flex';
    const urlForm = document.getElementById('urlForm');
    urlForm.style.display = 'none';
    console.log('Button clicked');
    const urlInput = document.getElementById('urlInput').value;
    console.log('URL input value:', urlInput);
    shortenUrl(urlInput);
});

function shortenUrl(url) {
    fetch('https://xoru.onrender.com/api/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url
        })
    })
    .then(response => response.json())
    .then(data => {
        const shortenedUrl = data.short_url;
        console.log(shortenUrl);
        displayShortenedUrl(shortenedUrl);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayShortenedUrl(url) {
    if(url=="")
    {
        alert("Your API Quota is finished for now, try again after sometime!");
        return;
    }
    const shortenedUrlContainer = document.getElementById('shortenedUrlContainer');
    const shortenedUrlInput = document.getElementById('shortenedUrl');
    const loader = document.getElementById('loader');
    shortenedUrlInput.value = url;
    shortenedUrlContainer.style.display = 'block';
    loader.style.display = 'none';
}

let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});

