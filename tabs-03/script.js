const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    allTabs.forEach((tab) => {
      if (tab.id.includes(linkId)) {
        tab.classList.add("tab-content--active");
        // generate content for tab
        generateTabItems(elem, tab);
      } else {
        tab.classList.remove("tab-content--active");
      }
    });
  });
});

const tabRecords = [
  {
    src: "assets/slack.png",
    name: "Slack",
    site: "https://slack.com",
    description: "Slack is a messaging app for business.",
    type: ["communication", "productivity"],
  },
  {
    src: "assets/sendgrid.png",
    name: "SendGrid",
    site: "https://sendgrid.com",
    description: "Email API service for developers",
    type: ["developer"],
  },
  {
    src: "assets/asana.png",
    name: "Asana",
    site: "https://asana.com",
    description:
      "Track, manage and control your projects across any team, right",
    type: ["productivity"],
  },
  {
    src: "assets/yahoo.png",
    name: "Yahoo Finance",
    site: "https://finance.yahoo.com",
    description: "Get quotes of stocks, funds, ETFs, currencies",
    type: ["external"],
  },
];

//? predefined filter functions
const filter = {
  ["all"]: () => true,
  ["developer"]: (record) => record.type.includes("developer"),
  ["productivity"]: (record) => record.type.includes("productivity"),
  ["external"]: (record) => record.type.includes("external"),
  ["communication"]: (record) => record.type.includes("communication"),
};

const generateTabItems = (elem, tabContent) => {
  const filterName = elem.name;

  const filterFunction = filter[filterName];

  const mappedRecords = tabRecords.filter(filterFunction).map((record) => {
    return DOMPurify.sanitize(
      `<div class="record">
        <div class="avatar__wrapper">
          <img
             src="${record.src}"
             class="avatar avatar--${record.type}"
             alt="Profile"
          >
        </div>
        <div class="content">
          <div class="title-description">
            <div class="title">
              <div class="title-name">
                ${record.name}
              </div>
              <a
                href="${record.site}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${record.site}
                <img src="assets/link.svg" alt="External">
              </a>
            </div>
            <div class="description">
              ${record.description}
            </div>
          </div>
          <label class="switch-wrapper">
              <span class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
              </span>
          </label>
        </div>
      </div>`
    );
  });

  tabContent.innerHTML = mappedRecords.join("");
};

//? handle proper selection for initial load
const currentHash = window.location.hash;

let activeLink = document.querySelector(`.tabs a`);

if (currentHash) {
  const visibleHash = document.getElementById(`${currentHash}`);

  if (visibleHash) {
    activeLink = visibleHash;
  }
}

const activeTab = document.querySelector(`#${activeLink.id}-content`);

activeLink.classList.toggle("active");
activeTab.classList.toggle("tab-content--active");

generateTabItems(activeLink, activeTab);
