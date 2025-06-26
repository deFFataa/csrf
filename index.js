axios
  .get("https://psgc.gitlab.io/api/regions.json")
  .then((response) => {
    const regions = response.data;
    const regionSelect = document.getElementById("region");
    regions.forEach((region) => {
      const option = document.createElement("option");
      option.value = `${region.regionName} (${region.name})`;
      option.textContent = `${region.regionName} (${region.name})`;
      regionSelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching regions:", error));
