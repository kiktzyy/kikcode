import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data.json');

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: "Data file not found" });
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to load data" });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
