export const apiUrl = "";
// export const apiUrl = "https://b84788ef47db.ngrok-free.app";

export const s3Url = "";
// live url 0
export const imageUrl = (url) => `${s3Url}/${url}`;
export const mediaUrl = (url) => `${s3Url}/${url}`;

export const BaseURL = (link) => {
  return `${apiUrl}/api/v1/${link}`;
};
