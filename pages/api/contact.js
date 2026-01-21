export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, company, message } = req.body

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // Contact form received - integrate with email service in production
  // For now, just acknowledge receipt

  return res.status(200).json({ message: 'Message received' })
}
