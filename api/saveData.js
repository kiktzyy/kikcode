import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const data = req.body;

  if (!data || typeof data !== 'object') {
    res.status(400).json({ error: "Invalid data" });
    return;
  }

  const filePath = path.join(process.cwd(), 'data.json');

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to save data" });
      return;
    }
    res.status(200).json({ message: "Data saved successfully" });
  });
}
