
// Search settings
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

// Select settings category
settingOptions.forEach(option => {
    option.addEventListener("click", function () {

        // Remove active class from all options
        settingOptions.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to selected option
        this.classList.add("active");

        // Update page heading
        const selectedSetting = this.textContent
            .replace("›", "")
            .trim();

        document.getElementById("pageTitle").textContent =
            selectedSetting;
    });
});

// Tweet button
document.querySelector(".tweet-btn").addEventListener("click", function () {
    alert("Welcome to Twitter!");
});
  