// in-memory data struture to store surveys
let surveys = []

//get all surveys
router.get('/surveys', (req, res) => {
    //return all surveys in json format
})

// create a new survey
router.post('/surveys', (req, res) => {
    // get survey from request body
    // add it to the surveys array
    // return status 201 and survey in json format
})

router.put('/surveys/:id', (req, res) => {
    // get suvery id and survey content from the request
    // update the survey in surveys array
    // return the updated survey on success
    // return status 404 and message 'Survey not found' on failure
})

router.delete('/surveys/:id', (req, res) => {
    // get survey id from the request
    // delete the survey in surveys array 
    // return the deleted survey on success
    // return status 404 and message 'Survey not found' on failure
})

module.exports = router