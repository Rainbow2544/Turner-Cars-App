export const analyzeImage = async (imageData) => {
    const AzureImgKey = process.env.REACT_APP_AZURE_IMG_KEY;

    const endpoint ="https://m1trainingcarsmodel-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/3ea712d5-76e8-4a03-adf4-0b2fea814f8c/classify/iterations/Iteration9/url"
    
    
    function getHighestProbabilityTagName(data) {
      let highestProbability = 0;
      let highestProbabilityTagName = '';
    
      data.predictions.forEach((prediction) => {
        if (prediction.probability > highestProbability) {
          highestProbability = prediction.probability;
          highestProbabilityTagName = prediction.tagName;
        }
      });
    
      return highestProbabilityTagName;
    }


    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            "Url": `${imageData}`
          }),
        headers: {
          "Content-Type": "application/json",
          "Prediction-Key": `${AzureImgKey}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        
        const highestProbabilityTagName = getHighestProbabilityTagName(data);
        console.log(highestProbabilityTagName)
        return highestProbabilityTagName;
      } else {
        console.log("Error:", response.status);
        return response;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

 
  