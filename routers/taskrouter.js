const Tasks = require("./../models").tasks;
module.exports = function(router) {
    router.post("/task", (req, res) => {
      console.log(req.body)
        Tasks.create({
          taskname: req.body.taskname
        })
          .then(data  => {
            res.json({
              sucess: true,
              data: data
            });
          })
          .catch(err => res.json(err));
      });
    };