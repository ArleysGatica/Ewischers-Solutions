const Working = require("../Schema/WorkingSchema");

exports.add = async (req, res, next) => {
  const { Name, Status, Image, Designation, Country, HireDate, reportsTo, kanbans } = req.body;

  try {
    const working = new Working({
        Name,
        Status,
        Designation,
        Image,
        Country,
        HireDate,
        reportsTo,
        kanbans,
      });

    const newWorking = await working.save();

    res.json(newWorking);
  } catch (error) {
    next(error);
  }
};

exports.show = (req, res, next) => {
  Working.find({})
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

  Working.findById(id)
    .populate("kanbans")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};
