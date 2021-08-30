require("../db/mongoose");
const Task = require("../models/Task");

// Task.findByIdAndDelete("612b92ec7757acf6cc4da4fe")
//   .then((task) => {
//     console.log(task);

//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));

const findTaskAndDelete = async (id) => {
  const deletedTask = await Task.findByIdAndDelete("612b92790a6791a84f147ba5");
  const count = await Task.countDocuments({ completed: false });

  return count;
};

findTaskAndDelete("612b92ec7757acf6cc4da4fe")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => console.log(e));
