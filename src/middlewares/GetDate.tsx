// Function to get the time of post 
const getDate = (date: Date) => {
    return new Date(date).toDateString().slice(4, 15);
  };

  export default getDate