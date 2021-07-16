function generateHtml(allTeamCardsStr) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="./assets/css/reset.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <link rel="shortcut icon" href="./assets/img/favicon.ico?" type="image/x-icon">
        <title>Team Profiles</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section>
            ${allTeamCardsStr}
            <!-- dynamic content goes here -->
        </section>
        <footer>
            <p>This HTML was created using a command-line javascript application</p>
            <p>Created by <a href="https://github.com/brandonnorsworthy">Brandon Norsworthy</a> with 🧠 Power</p>
        </footer>
    </body>
    </html>
    `
}

module.exports = generateHtml;