const Sneaker = require("./model");
const { routeErrors, documentExists } = require("../util/helpers");
const { newFilePaths, deleteFiles } = require("../util/filehandler");

const getSneakers = async (req, res) => {
    const page = req.query.page ? Number(req.query.page) - 1 : 0;
    const keyword = req.query.keyword || "";
    const dataPerPage = req.query.dataPerPage
        ? Number(req.query.dataPerPage)
        : 10;

    try {
        const filters = {
            $or: [
                { brand: { $regex: keyword, $options: "i" } },
                { category: { $regex: keyword, $options: "i" } },
                { size: { $regex: keyword, $options: "i" } },
                { label: { $regex: keyword, $options: "i" } },
                { price: { $regex: keyword, $options: "i" } },
                { color: { $regex: keyword, $options: "i" } },
                { manufacturer: { $regex: keyword, $options: "i" } }
            ]
        };

        const numSneakers = await Sneaker.count(filters);

        const sneakers = await Sneaker.find(filters)
            .skip(page * dataPerPage)
            .limit(dataPerPage)
            .sort({ createdAt: -1 });

        res.send({ sneakers, numSneakers });
    } catch (error) {
        routeErrors(res, error, "Unable to get Sneakers!");
    }
};

const addSneaker = async (req, res) => {
    try {
        const newSneaker = new Sneaker(req.body);
        if (req.files) newSneaker.images = newFilePaths(req.files);
        await newSneaker.save(newSneaker);
        res.send("Sneaker added successfully!");
    } catch (error) {
        routeErrors(res, error, "Unable to add a Sneaker!");
    }
};

const getSneaker = async (req, res) => {
    try {
        const sneaker = await Sneaker.findById(req.params.id);
        res.send(sneaker);
    } catch (error) {
        routeErrors(res, error, "Unable to get Sneaker!");
    }
};

const updateSneaker = async (req, res) => {

    const sneakerExists = await documentExists(res, req.params.id, Sneaker);
        if (!sneakerExists) return routeErrors(res, "", "Sneaker does not exist.");
        if (req.files) req.body.images = newFilePaths(req.files);

        //find old pic to delete
    const oldImages = sneakerExists?.images;
        Sneaker.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((response) => {
            if (req.files) deleteFiles(oldImages);

            res.send(response);
        })
        .catch((error) => {
            routeErrors(res, error, "Unable to update Sneaker!");       
        });
};


const deleteSneaker = async (req, res) => {
    try {
        // Check if document exists
        const sneakerExists = await documentExists(res, req.params.id, Sneaker);
        if (!sneakerExists) return routeErrors(res, "", "Sneaker does not exist.");

        await Sneaker.findByIdAndDelete(req.params.id);
        res.send("Sneaker deleted!");
    } catch (error) {
        routeErrors(res, error, "Unable to delete a Sneaker!");
    }
};


module.exports = {
    getSneakers,
    addSneaker,
    getSneaker,
    updateSneaker,
    deleteSneaker
};
