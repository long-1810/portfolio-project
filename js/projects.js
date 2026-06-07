document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");

    // Khởi chạy hàm fetch dữ liệu từ file JSON ở tầng gốc trang web
    fetch("../assets/data/project-data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Không thể tải được tệp dữ liệu dự án.");
            }
            return response.json();
        })
        .then(data => {
            renderProjects(data);
        })
        .catch(error => {
            console.error("Lỗi:", error);
            projectsContainer.innerHTML = `<p class="error-msg">Đã xảy ra lỗi khi tải danh sách nhiệm vụ. Vui lòng thử lại sau!</p>`;
        });

    // Hàm render cấu trúc thẻ kiểu YouTube
    function renderProjects(projects) {
        let htmlCards = "";

        projects.forEach(project => {
            htmlCards += `
                <div class="project-card">
                    <div class="card-thumbnail">
                        <img src="${project.image}" alt="${project.title}" class="thumbnail-img" onerror="this.src='https://placehold.co/600x400/1e1e24/f3f4f6?text=Unavailable'">
                    </div>
                    <div class="card-content">
                        <span class="card-tag">${project.tag}</span>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-time">Thời gian nộp bài: ${project["submit-time"]}</p>
                        <p class="card-desc">${project.desc}</p>
                        <a href="${project.link}" class="card-link-btn">Chi tiết nhiệm vụ &rarr;</a>
                    </div>
                </div>
            `;
        });

        projectsContainer.innerHTML = htmlCards;
    }
});