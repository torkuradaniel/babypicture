// Import the Replicate SDK
import Replicate from "replicate"; 

// Initialize the Replicate client
const replicate = new Replicate({
  auth: 'r8_BG6uIMugVcTL0GSFFaz6BbDCSOUVz3f0VLUVC'
});

// Define the model to run
const model = "catacolabs/baby-pics:2c228c4d2266c2a03fee359e7d1dd7cb20838e9d68500d18749e4213f6c6b97d";

// Define the input data  
// const input = {
//   image: firstImage,
//   image2: secondImage,
//   gender: babyGender
//   // image: "https://imgtr.ee/images/2023/07/29/4f6098ad79b9acb2af736ab30f730a58.jpeg",
//   // image2: "https://imgtr.ee/images/2023/07/29/d46f122c6803ded80c50b5b4b3599513.jpeg",
//   // gender: "boy"
// };

// Run the model
export async function someAsyncFunction(firstImage, secondImage, babyGender) {

  console.log(firstImage)
  console.log(secondImage)
  console.log(babyGender)

  const input = {
    image: firstImage,  
    image2: secondImage,
    gender: babyGender  
  };

  try {
    const output = await replicate.run(model, { input 
    }
      );
    // Do something with the 'output'
    console.log(output) // Example: log the output to the console
    return output; // Return the output to the caller
  } catch (error) {
    // Handle any errors that might occur during the await operation
    console.error("Error occurred:", error);
  }
}

// Export the output
//module.exports = someAsyncFunction;
