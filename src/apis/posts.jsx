import axios from "axios";
//const db = new Low(new JSONFile('db.json'))

export default  axios.create({
	baseURL:"http://localhost:8080"
})
