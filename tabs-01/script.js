
const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });

    allTabs.forEach((tab) => {
      if (tab.id.includes(linkId)) {
        tab.classList.add("tab-content--active");
        // generate content for tab
        generateTabItems(
          elem,
          tab
        );    
      } else {
        tab.classList.remove('tab-content--active');
      }
    });
  });
});

//? mocked for example
const tabRecords = [
  {
    src: 'assets/profile.jpg',
    name: 'James Alexander',
    description: 'Joined 10 minutes ago',
    type: 'user',
    status: 'active'
  },
  {
    src: 'assets/profile-woman.jpg',
    name: 'Lilia Taylor',
    description: 'Joined 30 minutes ago',
    type: 'user',
    status: 'inactive'
  },
  {
    src: 'assets/image.svg',
    name: 'Profile photo',
    description: 'Uploaded 20 minutes ago',
    type: 'file'
  },
  {
    src: 'assets/folder.svg',
    name: 'CV Folder',
    description: 'Created 2 days ago',
    type: 'file'
  },
];

//? predefined filter functions
const filter = {
  ['all']: () => true,
  ['user']: (record) => record.type === 'user',
  ['file']: (record) => record.type === 'file',
}

const generateTabItems = (elem, tabContent) => {
  const filterName = elem.name;

  const filterFunction = filter[filterName];

  const mappedRecords = tabRecords
    .filter(filterFunction)
    .map(
      (record) => {
      return DOMPurify.sanitize(`<div class="record">
        <div class="avatar__wrapper">
          <img
             src="${record.src}"
             class="avatar avatar--${record.type}"
             alt="Profile"
          >
          ${record.type==='user' && record.status ?
            `<div class="status">
                <div class="
                    status__inner 
                    status__inner--${record.status}">
                </div>
            </div>`
            : ''
          }
        </div>
        <div class="content">
          <div class="title">
            ${record.name}
          </div>
          <div class="description">
            ${record.description}
          </div> 
        </div>
      </div>`);
  });

  tabContent.innerHTML = mappedRecords.join('');
}

//? handle proper selection for initial load
const currentHash = window.location.hash;

let activeLink = document.querySelector(`.tabs a`);

if (currentHash) {
  const visibleHash = document.getElementById(
    `${currentHash}`
  );

  if (visibleHash) {
    activeLink = visibleHash;
  }
}

const activeTab = document.querySelector(
  `#${activeLink.id}-content`
);

activeLink.classList.toggle('active');
activeTab.classList.toggle('tab-content--active');

generateTabItems(activeLink, activeTab);

