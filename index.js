const API_KEY = "7df2c91b93e04002bd908183fed62b3a";
const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

async function fetchNews() {
    const response = await fetch(`${API_URL}${API_KEY}`);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    const container = document.getElementById("news-container");
    articles.forEach(article => {
        const newsElement = document.createElement("div");
        newsElement.classList.add("news-item");
        newsElement.innerHTML = `
            <img src="${article.urlToImage}" alt="News Image" />
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(newsElement);
    });
}

fetchNews()

const checkbox = document.querySelector("input");
const body = document.querySelector("body");
const news = document.getElementsByClassName("news-item");
const images = document.querySelector("img");

const darkMode = () => {
    body.style.background = "black";
    body.style.color = "white";
    news.style.borderColor = "white";
    images.style.filter = "drop-shadow(0px 0px 20px white)";
}

checkbox.onclick = darkMode;