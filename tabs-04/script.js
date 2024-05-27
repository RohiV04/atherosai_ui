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
    company: {
      src: "assets/companies/aws.png",
      name: "Amazon",
    },
    role: 'Senior DevOps Engineer',
    type: 'on-site',
    salary: '$220k - $300k / year',
    location: 'New York, United States',
    applicants: ['lilia', 'drew', 'melissa'],
    applicationsCount: 220
  },
  {
    company: {
      src: "assets/companies/google.png",
      name: "Google",
    },
    role: 'Senior Backend Developer',
    type: 'hybrid',
    salary: '$225k - $280k / year',
    location: 'San Francisco, United States',
    applicants: [ 'drew', 'lilia', 'melissa'],
    applicationsCount: 240
  },
  {
    company: {
      src: "assets/companies/meta.svg",
      name: "Meta",
    },
    role: 'Senior Backend Developer',
    type: 'hybrid',
    salary: '$215k - $260k / year',
    location: 'London, United Kingdom',
    applicants: [ 'drew', 'lilia', 'melissa'],
    applicationsCount: 235
  },
  {
    company: {
      src: "assets/companies/slack.png",
      name: "Slack",
    },
    role: 'Senior Frontend Developer',
    type: 'remote',
    salary: '$160k - $220k / year',
    location: 'London, United Kingdom',
    applicants: [ 'drew', 'lilia', 'melissa'],
    applicationsCount: 200
  },
];

//? predefined filter functions
const filter = {
  ["all"]: () => true,
  ["on-site"]: (record) => record.type.includes("on-site"),
  ["remote"]: (record) => record.type.includes("remote"),
  ["hybrid"]: (record) => record.type.includes("hybrid"),
};

const generateTabItems = (elem, tabContent) => {
  const filterName = elem.name;

  const filterFunction = filter[filterName];

  const mappedRecords = tabRecords.filter(filterFunction).map(({ company, ...record }) => {
    return DOMPurify.sanitize(
      `<div class="job">
        <div class="job__main">
          <div class="job__company">
            <img
              src="${company.src}"
              class="job__avatar job__avatar--${company.name}"
              alt="Profile"
            >
          </div>
          <div class="job__description">
            <div class="job__name">
              <div class="job__role">
                ${record.role} (${record.type})
              </div>
              <button type="button" class="job__bookmark">
                 <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#333531"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bookmark"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" /></svg>
              </button>
            </div>
            <div class="job__company">
                ${company.name}
              </div>
            <div class="job__location">
              <img src="assets/location.svg" alt="Location">
              ${record.location}
            </div>
          </div>
        </div>
        <div class="job__bottom">
          <div class="job__applicants">
            ${record.applicants.map((applicant) => {
              return (
                `<img src="assets/users/${applicant}.jpg" alt="${applicant.name}" class="job__applicant">`
              )
            }).join("")}
            +${record.applicationsCount} applicants
          </div>
          <div class="job__salary">
            ${record.salary}
          </div>
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
