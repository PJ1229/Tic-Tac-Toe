const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the client/build folder
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler: for any request, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
