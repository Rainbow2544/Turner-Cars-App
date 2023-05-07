export const analyzeImage = async (imageData) => {
    const endpoint = "https://m1-find-similar-cars-img.cognitiveservices.azure.com/vision/v3.1/analyze";
    console.log({
        "url": `${imageData}`
      });
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            "url": `${imageData}`
          }),
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "af408fb0e24a4b4e92a2d59292966ba1",
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
  

 
  