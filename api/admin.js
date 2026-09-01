export default function handler(req, res) {
  const authHeader = req.headers['x-custom-auth'];

  if (authHeader === 'bypass-key') {
    return res.status(200).json({ message: "Acceso concedido al área privada de la API" });
  }

  return res.status(403).json({ error: "403 Forbidden: Acceso Restringido" });
}
