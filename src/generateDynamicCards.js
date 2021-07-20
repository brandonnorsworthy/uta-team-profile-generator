function generateDynamicCards(teamMember) {
    let roleSpecificStr = ``;
    let roleIconStr = ``;

    switch (teamMember.constructor.name) {
        case "Manager":
            roleIconStr = `local_cafe`;
            roleSpecificStr = `Office Number: ${teamMember.officeNumber}`;
            break;
        case "Engineer":
            //?clickable github username
            //GitHub profile opens in a new tab
            roleIconStr = `smart_toy`;
            roleSpecificStr = `Github: <a href="https://github.com/${teamMember.githubUsername}" target="_blank">@${teamMember.githubUsername}</a>`;
            break;
        case "Intern":
            roleIconStr = `school`;
            roleSpecificStr = `School: ${teamMember.school}`;
            break;
        default:
            roleIconStr = `case error 123`;
            roleSpecificStr = `case error 123`;
            break;
    }

    //?clickable email address
    //default email program opens and populates the TO field of the email with the address
    return `
    <div class="card">
        <div class="card-top">
            <h1>${teamMember.employeeName}</h1>
            <h2>
                <span class="material-icons">
                ${roleIconStr}
                </span>
                ${teamMember.constructor.name}
            </h2>
        </div>
        <div class="card-bottom">
            <p>ID: ${teamMember.id}</p>
            <p>Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></p>
            <p>${roleSpecificStr}</p>
        </div>
    </div>
    `
}

module.exports = generateDynamicCards;