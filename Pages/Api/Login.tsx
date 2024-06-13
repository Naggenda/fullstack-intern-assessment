export default function handler(req, res) {
    export default function handler(req, res) {
        if (req.method === 'POST') {
          const { username, password } = req.body;
      
          // Find user by username and password
          const user = users.find(user => user.username === username && user.password === password);
      
          if (user) {
            // Generate bearer token (for simplicity, we're just using username as token)
            const token = username;
            return res.status(200).json({ token });
          } else {
            return res.status(401).json({ error: 'Invalid username or password' });
          }
        } else {
          return res.status(405).json({ error: 'Method Not Allowed' });
        }
      }
  }