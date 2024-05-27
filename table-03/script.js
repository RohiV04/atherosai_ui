const transactions = [
    {
        src: 'assets/profile.jpg',
        name: 'James Alexander',
        alias: '@james',
        amount: '$1,000',
        email: 'james@example.com',
        status: 'completed',
        date: '2023-10-20T16:12:00Z',
    },
    {
        src: 'assets/liliya.jpg',
        name: 'Lilia Taylor',
        alias: '@lilia',
        amount: '$1,115',
        email: 'lilia.taylor@example.com',
        date: '2023-10-22T13:12:00Z',
        status: 'error',
    },
    {
        src: 'assets/drew.jpg',
        name: 'Drew Cano',
        amount: '$8,220',
        email: 'drew.crano@example.com',
        status: 'completed',
        date: '2023-10-22T18:12:00Z',
    },
    {
        src: 'assets/nate.jpg',
        name: 'Nate Conor',
        amount: '$1,750',
        email: 'nate@example.com',
        status: 'error',
        date: '2023-10-22T22:05:00Z',
    },
    {
        name: 'Melissa Brantley',
        amount: '$220',
        src: 'assets/melissa.jpg',
        email: 'melissa@example.com',
        status: 'pending',
        date: '2023-10-24T19:05:00Z',
    },
    {
        name: 'Anna Smith',
        amount: '$755',
        src: 'assets/anna.jpg',
        email: 'anna.smith@example.com',
        status: 'completed',
        date: '2023-10-25T22:05:00Z',
    },
    {
        src: 'assets/natalia.jpg',
        amount: '$5950',
        name: 'Natalia Alexandra',
        email: 'natalia@example.com',
        date: '2023-10-26T23:05:00Z',
        status: 'error',
    },
    {
        name: 'Ryan Stewart',
        amount: '$640',
        src: 'assets/ryan.jpg',
        email: 'ryan@example.com',
        status: 'completed',
        date: '2023-10-29T20:05:00Z',
    },
    {
        src: 'assets/eddie.jpg',
        amount: '$620',
        name: 'Edward Alexandr',
        email: 'edward@example.com',
        date: '2023-10-30T22:05:00Z',
        status: 'completed',
    },
    {
        src: 'assets/laura.jpg',
        amount: '$756',
        name: 'Laura Smith',
        email: 'laura@example.com',
        date: '2023-11-28T23:05:00Z',
        status: 'completed',
    },
];

const tableWidget = document.getElementsByClassName('table-widget');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(transactions.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = transactions
    .filter((_, i) => (
        ((start - 1) * itemsOnPage) < i + 1) && 
        (i+1 <= start * itemsOnPage)
    )
    .map(
        (teamMember) => {
            return `<tr>
                <td class="team-member-profile">
                    <img
                        src="${teamMember.src}"
                        alt="${teamMember.name}"
                    >
                    <span class="profile-info">
                        <span class="profile-info__name">
                            ${teamMember.name}
                        </span>
                        <span class=profile-info__alias>
                            ${teamMember.email}
                        </span>
                    </span>
                </td>
                <td>
                    ${teamMember.amount}
                </td>
                <td>
                    <span
                        class="status status--${teamMember.status}"
                    >
                        ${teamMember.status}
                    </span>
                </td>
                <td>
                    ${new Date(teamMember.date).toLocaleDateString('en-us', 
                        {
                            'weekday': 'short',
                            'year': 'numeric', 
                            'month': 'short', 
                            'day': 'numeric',
                            'hour': 'numeric',
                            'minute': 'numeric',
                        }
                    )}
                </td>
            </tr>`;
        }
    );


const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    linkList.push(
        `<li>
            <a
                href="?page=${pageNumber}" 
                ${pageNumber == start ? 'class="active"' : ''} 
                title="page ${pageNumber}">
                ${pageNumber}
            </a>
        </li>`
    );
}

const table = DOMPurify.sanitize(`<table>
    <caption>
        Transactions
        <span class="table-row-count">(${transactions.length})</span>
    </caption> 
    <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Processed</th>
        </tr>
    </thead>
    <tbody id="table-rows">
        ${mappedRecords.join('')}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">
                <ul class="pagination">
                    <!--? generated pages -->
                    ${linkList.join('')}
                </ul>
            </td>
        </tr>
    </tfoot>
</table>`);

tableWidget[0].innerHTML = table;