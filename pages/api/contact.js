export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, company, message } = req.body

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // TODO: Send email or save to database
  console.log('Contact form submission:', { name, email, company, message })

  return res.status(200).json({ message: 'Message received' })
}
