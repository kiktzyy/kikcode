// Simple API untuk GET dan POST data

let savedData = {};

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: "Hello from API!", data: savedData });
  } else if (req.method === 'POST') {
    savedData = req.body;
    res.status(200).json({ message: "Data saved!", data: savedData });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
      }
