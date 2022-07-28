const handlers = ({ axios }) => ({
    getJokes: async (req, res) => {
        try{
            res.status(200).json({jokes: 'lapmt'});

        }catch(err){
            res.status(500).send(`An error has ocurred ${err}` )
        }

    }
})

module.exports = handlers