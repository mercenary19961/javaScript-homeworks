const apiKey = 'AIzaSyDuwl-XKFIvgw9-KS7zzbBELBuY28W5HsA';

async function searchVideos() {
    const query = document.getElementById('search-query').value;
    const maxResults = 10;
    const apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayVideos(data.items);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayVideos(videos) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = '';

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video';

        const title = document.createElement('h3');
        title.textContent = video.snippet.title;
        videoElement.appendChild(title);

        const link = document.createElement('a');
        link.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
        link.target = '_blank';

        const thumbnail = document.createElement('img');
        thumbnail.src = video.snippet.thumbnails.high.url;
        thumbnail.alt = video.snippet.title;
        link.appendChild(thumbnail);

        videoElement.appendChild(link);

        const description = document.createElement('p');
        description.textContent = video.snippet.description;
        videoElement.appendChild(description);

        videoList.appendChild(videoElement);
    });
}

document.getElementById('search-button').addEventListener('click', searchVideos);
