export const Template = ({ children, stylesTag, scriptContent }) => {
  return (/* html */`
    <html lang="en">
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link rel="stylesheet" href="/style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        ${stylesTag}
        ${scriptContent ? `<script id="server-script" defer>${scriptContent}</script>` : ''}
        <title>Helix App</title>
      </head>

      <body>
        <div id="app">${children}</div>
        <script src="/bundle.js" defer></script>
      </body>
    </html>`
  )
}
