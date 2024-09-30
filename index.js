const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.port || 3000;

// MiddleWare
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bistro-Boss is running on port 3000')
})


app.listen(port, () => {
    console.log(`Bistro Boss is running on port ${port}`);

})