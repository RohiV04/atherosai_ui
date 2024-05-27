const teamMembers = [
    {
        src: 'assets/profile.jpg',
        name: 'James Alexander',
        alias: '@james',
        email: 'james@example.com',
        status: 'active',
        tags: ['dev', 'QA']
    },
    {
        src: 'assets/liliya.jpg',
        name: 'Lilia Taylor',
        alias: '@lilia',
        email: 'lilia.taylor@example.com',
        status: 'active',
        tags: ['design', 'marketing']
    },
    {
        src: 'assets/drew.jpg',
        name: 'Drew Cano',
        email: 'drew.crano@example.com',
        alias: '@drew',
        status: 'inactive',
        tags: ['design', 'marketing']
    },
    {
        src: 'assets/nate.jpg',
        name: 'Nate Conor',
        email: 'nate@example.com',
        alias: '@nate',
        status: 'offline',
        tags: ['dev']
    },
    {
        name: 'Melissa Brantley',
        src: 'assets/melissa.jpg',
        email: 'melissa@example.com',
        alias: '@melissa',
        status: 'active',
        tags: ['marketing']
    },
    {
        name: 'Anna Smith',
        src: 'assets/anna.jpg',
        email: 'anna.smith@example.com',
        alias: '@anna',
        status: 'active',
        tags: ['marketing', 'design']
    },
    {
        src: 'assets/natalia.jpg',
        name: 'Natalia Alexandra',
        email: 'natalia@example.com',
        alias: '@natalia',
        status: 'inactive',
        tags: ['dev', 'marketing']
    },   
    {
        name: 'Ryan Stewart',
        src: 'assets/ryan.jpg',
        email: 'ryan@example.com',
        status: 'inactive',
        alias: '@ryan',
        tags: ['dev', 'QA']
    },
    {
        src: 'assets/eddie.jpg',
        name: 'Edward Alexander',
        email: 'edward@example.com',
        alias: '@eddie',
        status: 'active',
        tags: ['dev', 'marketing']
    },
    {
        src: 'assets/laura.jpg',
        name: 'Laura Smith',
        email: 'laura@example.com',
        status: 'inactive', 
        alias: '@laura',
        tags: ['design', 'QA']
    },
];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => 
    (((start - 1) * itemsOnPage) < i + 1) && 
    (i+1 <= start * itemsOnPage)
)
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
                <span class=profile-info__alias>
                    ${teamMember.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.email}</td>
        <td>
            <span class="tags">
                ${teamMember.tags.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join('')}
            </span>        
        </td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');


