function getLsData() {
  const lsData = localStorage.getItem("donationCart");
  if (lsData) {
    return JSON.parse(lsData);
  }
  return [];
}

function setLsData(id) {
  const storGetData = getLsData();
  const isHasData = storGetData.find((item) => item === id);
  if (!isHasData) {
    storGetData.push(id);
    const jsonData = JSON.stringify(storGetData);
    localStorage.setItem("donationCart", jsonData);
  }
}

export { getLsData, setLsData };
