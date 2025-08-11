import { json } from 'micro';

let savedServers = {};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.json(savedServers);
  }

  if (req.method === 'POST') {
    const data = await json(req);
    // data = { userId: "123", servers: ["id1", "id2", ...] }

    if (!data.userId || !data.servers) {
      return res.status(400).json({ error: 'userId dan servers harus ada' });
    }

    savedServers[data.userId] = data.servers;

    return res.json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
