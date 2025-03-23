export function getuserlocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude }); // Resolve with the location data
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("Location access is required to log in. Please allow location access.");
          } else {
            alert("Error retrieving location. Please try again.");
          }
          resolve({ latitude: -1, longitude: -1 }); // Resolve with fallback values
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      resolve({ latitude: -1, longitude: -1 }); // Resolve with fallback values
    }
  });
}

