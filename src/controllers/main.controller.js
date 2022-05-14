const handlers = ({ axios }) => ({
    getJokes: async (req, res) => {
        let idJokes = [];
        let jokes = []

        try{
            while(jokes.length < 15){
                let result = await axios.get('https://api.chucknorris.io/jokes/random?category=religion')
                
                if(!(idJokes.indexOf(result.data.id) != -1)){
                    jokes.push(result.data)
                }
                idJokes.push(result.data.id)
            }

            res.status(200).json(jokes)

        }catch(err){
            res.status(500).send(`An error has ocurred ${err}` )
        }

    }
})

module.exports = handlers