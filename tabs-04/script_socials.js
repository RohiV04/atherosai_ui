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
//  more data
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
  const mappedRecords = tabRecords.filter(filterFunction).map(
    ({ company, ...record }) => DOMPurify.sanitize(
      `<div class="job">
        // html markup for job listing
      </div>`
    )
  );
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

