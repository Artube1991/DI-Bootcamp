const str = {
    id: 1,
    task: "To make a haircut",
    description: "Visit Maor at Kadesh St.",
    status: "not completed",
  };
  
  const tasks = JSON.stringify(str);

  module.exports = {
    tasks,
  }