const Tasks = require("./../models").tasks;
module.exports = function(router) {
    router.post("/task", (req, res) => {
        Tasks.create({
          name: req.body.name,
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