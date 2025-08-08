export const downloadFile = (url, fileName) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function calculateTotalExperience(joiningDate, yearOnly) {
  const joinDate = new Date(joiningDate);
  const currentDate = new Date();

  const diffInMs = currentDate - joinDate;
  const diffInMonths = diffInMs / (1000 * 60 * 60 * 24 * 30.44);
  const years = Math.floor(diffInMonths / 12);
  const months = Math.floor(diffInMonths % 12);
  const totalYearsFloat = diffInMonths / 12;
  if (yearOnly) {
    return totalYearsFloat >= 1.4
      ? Math.ceil(totalYearsFloat)
      : Math.floor(totalYearsFloat) + 1;
  }

  return `${years} years ${months} months`;
}
