export const apiUrl = "https://airport-e8d242d7d4c2.herokuapp.com";
// export const apiUrl = "https://b84788ef47db.ngrok-free.app";

export const s3Url = "https://parking-bucket-storage.s3.amazonaws.com";
// live url 0
export const imageUrl = (url) => `${s3Url}/${url}`;
export const mediaUrl = (url) => `${s3Url}/${url}`;

export const BaseURL = (link) => {
  return `${apiUrl}/api/v1/${link}`;
};
