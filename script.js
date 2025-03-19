function changeMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    const messageContainer = document.getElementById("message-container");
    const alertContainer = document.getElementById("alert-container");

    if (userInput === "") {
        return; 
    }
    alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            Message updated successfully!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    messageContainer.innerHTML = `
        <div class="text-center mt-2">
            <p>${userInput}</p>
            <img src="image copy.png" class="small-icon" alt="Icon">
        </div>
    `;

    setTimeout(() => {
        messageContainer.innerHTML = "";
        alertContainer.innerHTML = "";
    }, 3000);

    document.getElementById("userInput").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "b0bed6c47c2f4c19bc6fe69c820a87f4";
    const newsContainer = document.getElementById("news-container");

    fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            data.articles.slice(0, 10).forEach(article => {
                newsContainer.innerHTML += `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${article.urlToImage || 'images/placeholder.jpg'}" class="card-img-top" alt="News Image">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description || 'No description available.'}</p>
                                <a href="${article.url}" target="_blank" class="btn btn-success">Read More</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
});
