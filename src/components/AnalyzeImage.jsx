export const analyzeImage = async (imageData) => {
    const AzureImgKey = process.env.REACT_APP_AZURE_IMG_KEY;

    const endpoint ="https://m1-find-similar-cars-img.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview"
    
    console.log("why",process.env.REACT_APP_AZURE_IMG_KEY)
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            "url": `${imageData}`
          }),
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": `${AzureImgKey}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        
        console.log(data);
        return data;
      } else {
        console.log("Error:", response.status);
        return response;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

 
  