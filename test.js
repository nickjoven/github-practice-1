const assignmentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

assignmentArray.map((element, index) => {
    console.log(element)
    console.log(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./main.css" />
        <title>Practice HTML ${element}</title>
      </head>
      <body>
        <script src="./index.js"></script>
        </script>
      </body>
    </html>`)
})