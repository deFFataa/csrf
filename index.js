axios
  .get("https://psgc.gitlab.io/api/regions.json")
  .then((response) => {
    console.log(response);
    
    const regions = response.data;
    const regionSelect = document.getElementById("region");
    regions.forEach((region) => {
      const option = document.createElement("option");
      option.value = region.code;
      option.textContent = `${region.regionName} (${region.name})`;
      regionSelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching regions:", error));
  
