const getAll = (req, res) => {
    res.status(200).send({
      message: "Bateu na rota!!",
    });
    console.log("oiii bateu rota");
  };
  
  export default {
    getAll,
  };