export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  const data = {
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
    ipaddress: req.ip,
  };
  res.status(200).json(data);
}
