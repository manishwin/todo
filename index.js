import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// GET endpoint to handle /info/:dynamic route
app.get('/info/:dynamic', (req, res) => {
  const { dynamic } = req.params;
  const { key } = req.query;
  console.log(`GET request received with dynamic param: ${dynamic} and query param: ${key}`);
  
  // Assuming you want to send back some data based on the request
  res.status(200).json({ info: 'Data fetched successfully' });
});


// POST endpoint to handle the root route
app.post('/', (req, res) => {
  const { parcel } = req.body;
  console.log("POST request received with parcel: ${parcel}");
  
  // Assuming you want to validate the request and send a response accordingly
  if (!parcel) {
    return res.status(400).json({ status: 'failed', message: 'Parcel data is missing' });
  }
  // Assuming you want to process the parcel data and send a success response
  // Here, you can process 'parcel' as per your application's logic
  
  res.status(200).json({ status: 'ok', message: 'Parcel data received successfully' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

