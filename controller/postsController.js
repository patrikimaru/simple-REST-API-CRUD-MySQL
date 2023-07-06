const pool =  require("../database/connection")
const postsController = {
  getAll: async (req,res) => {
    try {
      const [rows, fields] = await pool.query("select * from post");
      res.json({data: rows});
    } catch (error) {
      console.log(error);
      res.json({status: "error"});
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query("select * from post where id = ?", [id]);
      res.json({data:rows});
    } catch (error) {
      console.log(error);
      res.json({status: "error"});
    }
  },
  create: async (req,res) => {
    try {
      const { title, description } = req.body;
      const sql = "insert into post (title, description) values (? , ?)";
      const [rows, fields] = await pool.query(sql, [title, description]);
      res.json({data: rows});
    } catch (error) {
      console.log(error);
      res.json({status: "error"});
    }
  },
  update: async (req,res) => {
    try {
      const { title, description } = req.body;
      const { id } = req.params;
      const sql = "update post set title = ?, description = ? where id = ?";
      const [rows, fields] = await pool.query(sql, [title, description, id]);
      res.json({data: rows});
    } catch (error) {
      console.log(error);
      res.json({status: "error"});
    }
  },
  delete: async (req,res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query("delete from post where id = ?", [id]);
      res.json({data: rows});
    } catch (error) {
      console.log(error);
      res.json({status: "error"});
    }
  }
};

module.exports = postsController;