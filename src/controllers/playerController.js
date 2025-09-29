const obtainPlayer = async (email) => {
  const data = await fetch(
    `https://kaotika-server.fly.dev/players/email/${email}`
  );
  const response = await data.json();

  if (response.status !== "OK") {
    res.status(401).send({ error: "Invalid Player" });
  } else {
    return response.data;
  }
};
