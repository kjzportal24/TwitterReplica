
const searchInput = document.getElementById("searchSettings");
const settingOptions = document.querySelectorAll(".setting-option");

searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    settingOptions.forEach(option => {
        const text = option.textContent.toLowerCase();

        option.style.display = text.includes(searchValue)
            ? "flex"
            : "none";
    });
});

settingOptions.forEach(option => {
    option.addEventListener("click", function () {

        settingOptions.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        const selectedSetting = this.textContent
            .replace("›", "")
            .trim();

        document.getElementById("pageTitle").textContent =
            selectedSetting;
    });
});

document.querySelector(".tweet-btn").addEventListener("click", function () {
    alert("Welcome to Twitter!");
});
  