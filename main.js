  const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedTab = button.dataset.tab;

        tabButtons.forEach((tab) => {
          tab.classList.remove("active");
        });

        tabContents.forEach((content) => {
          content.classList.remove("active");
        });
        button.classList.add("active");
        document.getElementById(selectedTab).classList.add("active");
      });
    });