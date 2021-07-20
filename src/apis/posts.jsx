import axios from "axios";
//const db = new Low(new JSONFile('db.json'))

export default  axios.create({
	baseURL:"http://10.10.10.3:9004"
})
