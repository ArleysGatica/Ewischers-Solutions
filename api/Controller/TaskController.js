
const Kanban = require("../Schema/KanbanSchema");
const Working = require("../Schema/WorkingSchema");
const Task = require("../Schema/TaskSchema");

exports.add = async (req, res, next) => {
  const { Title, Status, Text, workings } = req.body;

  

  try {
    const newWorking = await Working.findById(workings);

    const task = new Task({
        Title,
        Status,
        Text,
        workings,
        kanbans: newWorking.kanbans
      });

      console.log(newWorking);
      console.log(task);
    
    const TaskSaved = await task.save();

    const kanban = await Kanban.findById(newWorking.kanbans);

    kanban.tasks.push(TaskSaved._id);

    kanban.save();

    newWorking.tasks.push(TaskSaved._id);

    newWorking.save();

    res.json(TaskSaved);
  } catch (error) {
    next(error);
  }
};

exports.show = (req, res, next) => {
  Task.find({})
    .populate("kanbans")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

exports.showById = (req, res, next) => {
  const id = req.params.id;

  Task.findById(id)
    .populate("kanbans")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};
